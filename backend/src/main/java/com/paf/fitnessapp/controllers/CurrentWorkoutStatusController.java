package com.paf.fitnessapp.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paf.fitnessapp.models.CurrentWorkoutStatusModel;
import com.paf.fitnessapp.services.CurrentWorkoutStatusService;

@CrossOrigin
@RestController
@RequestMapping("/current-workout-status")
public class CurrentWorkoutStatusController {
    
    @Autowired
    private CurrentWorkoutStatusService currentWorkoutStatusService;
    
    private static final Logger logger = LoggerFactory.getLogger(CurrentWorkoutStatusController.class);
    
    @PostMapping
    public ResponseEntity<CurrentWorkoutStatusModel> createCurrentWorkoutStatus(@RequestBody CurrentWorkoutStatusModel currentWorkoutStatusModel) {
        try {
            // Create the current workout status
            CurrentWorkoutStatusModel createdCurrentWorkoutStatus = currentWorkoutStatusService.createCurrentWorkoutStatus(currentWorkoutStatusModel);
            
            // Log success message
            logger.info("Current workout status created successfully: {}", createdCurrentWorkoutStatus.getId());
            
            // Return response with created current workout status and HTTP status code 201 (CREATED)
            return new ResponseEntity<>(createdCurrentWorkoutStatus, HttpStatus.CREATED);
        } catch (Exception e) {
            // Log error message
            logger.error("Error occurred while creating current workout status", e);
            
            // Return an HTTP status code indicating an internal server error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping
    public ResponseEntity<List<CurrentWorkoutStatusModel>> getAllCurrentWorkoutStatus() {
        try {
            // Retrieve all current workout statuses
            List<CurrentWorkoutStatusModel> currentWorkoutStatuses = currentWorkoutStatusService.getAllCurrentWorkoutStatus();
            
            // Log success message
            logger.info("Retrieved {} current workout statuses", currentWorkoutStatuses.size());
            
            // Return response with current workout statuses and HTTP status code 200 (OK)
            return new ResponseEntity<>(currentWorkoutStatuses, HttpStatus.OK);
        } catch (Exception e) {
            // Log error message
            logger.error("Error occurred while retrieving current workout statuses", e);
            
            // Return an HTTP status code indicating an internal server error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/api/user-workout-status/{userId}")
    public ResponseEntity<List<CurrentWorkoutStatusModel>> getWorkoutStatusByUserId(@PathVariable String userId) {
        List<CurrentWorkoutStatusModel> workoutStatusList = currentWorkoutStatusService.getWorkoutStatusByUserId(userId);
        return new ResponseEntity<>(workoutStatusList, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCurrentWorkoutStatus(@PathVariable String id) {
        try {
            // Delete the current workout status
            currentWorkoutStatusService.deleteCurrentWorkoutStatusById(id);
            
            // Log success message
            logger.info("Current workout status with ID {} deleted successfully", id);
            
            // Return response with HTTP status code 204 (NO_CONTENT) indicating successful deletion
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            // Log error message
            logger.error("Error occurred while deleting current workout status with ID {}", id, e);
            
            // Return an HTTP status code indicating an internal server error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
public ResponseEntity<CurrentWorkoutStatusModel> updateCurrentWorkoutStatus(@PathVariable String id, @RequestBody CurrentWorkoutStatusModel updatedWorkoutStatus) {
    try {
        // Update the current workout status
        CurrentWorkoutStatusModel existingWorkoutStatus = currentWorkoutStatusService.updateCurrentWorkoutStatus(id, updatedWorkoutStatus);
        
        if(existingWorkoutStatus != null) {
            // Log success message
            logger.info("Current workout status with ID {} updated successfully", id);
            
            // Return response with updated current workout status and HTTP status code 200 (OK)
            return ResponseEntity.ok(existingWorkoutStatus);
        } else {
            // Log error message if the workout status was not found
            logger.error("Current workout status with ID {} not found", id);
            
            // Return an HTTP status code indicating not found
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        // Log error message
        logger.error("Error occurred while updating current workout status with ID {}", id, e);
        
        // Return an HTTP status code indicating an internal server error
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}

}