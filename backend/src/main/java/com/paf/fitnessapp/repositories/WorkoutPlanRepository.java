package com.paf.fitnessapp.repositories;

import com.paf.fitnessapp.models.WorkoutPlanModel;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutPlanRepository extends MongoRepository<WorkoutPlanModel, String> {

    List<WorkoutPlanModel> findByUserId(String userId);

    List<WorkoutPlanModel> findByStatus(String status);
}
