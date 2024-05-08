package com.paf.fitnessapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf.fitnessapp.models.WorkoutPlanModel;
import com.paf.fitnessapp.repositories.WorkoutPlanRepository;

@Service
public class WorkoutPlanService {
    
    @Autowired
    private WorkoutPlanRepository workoutPlanRepository;
    
    public WorkoutPlanModel createWorkoutPlan(WorkoutPlanModel workoutPlanModel) {
        return workoutPlanRepository.save(workoutPlanModel);
    }

    // Method to retrieve workout plans by userId
    public List<WorkoutPlanModel> getWorkoutPlansByUserId(String userId) {
        return workoutPlanRepository.findByUserId(userId);
    }

    // Method to retrieve workout plans by userId
    public List<WorkoutPlanModel> getAllPublicWorkoutPlans(String status) {
        return workoutPlanRepository.findByStatus(status);
    }
}