package com.paf.fitnessapp.controllers;

import java.util.ArrayList;


import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf.fitnessapp.models.PostComment;
import com.paf.fitnessapp.models.SocialMediaPost;
import com.paf.fitnessapp.services.PostCommentService;
import com.paf.fitnessapp.services.SocialMediaPostService;

@RestController
@RequestMapping("/postComment")
public class PostCommentController {

    @Autowired
    private PostCommentService postCommentService;

    @Autowired
    private SocialMediaPostService socialMediaPostService;

    @GetMapping("/{id}")
    public ResponseEntity<PostComment> getSingleComment(@PathVariable String id) {
        Optional<PostComment> comment = postCommentService.getSingleComment(new ObjectId(id));
        return comment.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<PostComment>> getAllComments() {
        List<PostComment> comments = postCommentService.getAllComments();
        return ResponseEntity.ok().body(comments);
    }

    @PostMapping
public ResponseEntity<PostComment> createComment(@RequestBody Map<String, String> payload) {
    String postId = payload.get("postId");
    String userId = payload.get("userId");
    String text = payload.get("text");

    // Create the comment
    PostComment comment = postCommentService.createComment(postId, userId, text);

    // Fetch the corresponding post using its postId
    Optional<SocialMediaPost> optionalPost = socialMediaPostService.getSinglePost(new ObjectId(postId));
    if (optionalPost.isPresent()) {
        SocialMediaPost post = optionalPost.get();
        
        // Initialize comments list if it's null
        if (post.getComments() == null) {
            post.setComments(new ArrayList<>());
        }

        // Add the newly created comment to the comments array of the fetched post
        PostComment newComment = postCommentService.createComment(postId, userId, text);
        post.getComments().add(newComment);

        // Retrieve comment IDs from the list of PostComment objects
        List<String> commentIds = post.getComments().stream()
                                         .map(commentObj -> commentObj.getId().toString())
                                         .collect(Collectors.toList());

        // Update the post in the database by passing the updated post object
        socialMediaPostService.updatePost(post.getId(), post.getPostDescription(), post.getPostImages(),
                                           post.getPostVideos(), commentIds, post.getLikes());
    }

    return ResponseEntity.status(HttpStatus.CREATED).body(comment);
}



    @PutMapping("/{commentId}")
    public ResponseEntity<PostComment> updateComment(@PathVariable String commentId, @RequestBody Map<String, String> payload) {
        String text = payload.get("text");
        PostComment updatedComment = postCommentService.updateComment(new ObjectId(commentId), text);
        if (updatedComment != null) {
            return ResponseEntity.ok().body(updatedComment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable String commentId) {
        postCommentService.deleteComment(new ObjectId(commentId));
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/all")
    public ResponseEntity<Void> deleteAllComments() {
        postCommentService.deleteAllComments();
        return ResponseEntity.noContent().build();
    }
}
