package com.paf.fitnessapp.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf.fitnessapp.models.WorkoutPlanModel;
import com.paf.fitnessapp.services.WorkoutPlanService;

@CrossOrigin
@RestController
@RequestMapping("/workout-plans")
public class WorkoutPlanController {
    
    @Autowired
    private WorkoutPlanService workoutPlanService;
    
    private static final Logger logger = LoggerFactory.getLogger(WorkoutPlanController.class);
    
    @PostMapping
    public ResponseEntity<WorkoutPlanModel> createWorkoutPlan(@RequestBody WorkoutPlanModel workoutPlanModel) {
        try {
            // Create the workout plan
            WorkoutPlanModel createdWorkoutPlan = workoutPlanService.createWorkoutPlan(workoutPlanModel);
            
            // Log success message
            logger.info("Workout plan created successfully: {}", createdWorkoutPlan.getId());
            
            // Return response with created workout plan and HTTP status code 201 (CREATED)
            return new ResponseEntity<>(createdWorkoutPlan, HttpStatus.CREATED);
        } catch (Exception e) {
            // Log error message
            logger.error("Error occurred while creating workout plan", e);
            
            // Return an HTTP status code indicating an internal server error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<WorkoutPlanModel>> getWorkoutPlansByUserId(@PathVariable String userId) {
        try {
            // Retrieve workout plans by userId
            List<WorkoutPlanModel> workoutPlans = workoutPlanService.getWorkoutPlansByUserId(userId);
            
            // Log success message
            logger.info("Retrieved {} workout plans for userId: {}", workoutPlans.size(), userId);
            
            // Return response with workout plans and HTTP status code 200 (OK)
            return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
        } catch (Exception e) {
            // Log error message
            logger.error("Error occurred while retrieving workout plans for userId: {}", userId, e);
            
            // Return an HTTP status code indicating an internal server error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<WorkoutPlanModel>> getWorkoutPlansByStatus(@PathVariable String status) {
        try {
            // Retrieve workout plans by userId
            List<WorkoutPlanModel> workoutPlans = workoutPlanService.getAllPublicWorkoutPlans(status);
            
            // Log success message
            logger.info("Retrieved {} workout plans that are SHARED", workoutPlans.size());
            
            // Return response with workout plans and HTTP status code 200 (OK)
            return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
        } catch (Exception e) {
            // Log error message
            logger.error("Error occurred while retrieving Shared workout plans", e);
            
            // Return an HTTP status code indicating an internal server error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
