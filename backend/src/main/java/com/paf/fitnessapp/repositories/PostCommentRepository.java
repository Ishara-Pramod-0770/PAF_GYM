package com.paf.fitnessapp.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf.fitnessapp.models.PostComment;

@Repository
public interface PostCommentRepository  extends MongoRepository<PostComment, ObjectId>{

}