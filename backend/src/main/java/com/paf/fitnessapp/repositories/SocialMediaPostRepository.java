package com.paf.fitnessapp.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf.fitnessapp.models.SocialMediaPost;

@Repository
public interface SocialMediaPostRepository extends MongoRepository<SocialMediaPost, ObjectId>{

}