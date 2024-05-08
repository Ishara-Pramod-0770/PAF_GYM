package com.paf.fitnessapp.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf.fitnessapp.models.ExerciseModel;
import com.paf.fitnessapp.services.ExerciseService;

@CrossOrigin
@RestController
@RequestMapping("/exercises")
public class ExerciseController {
	
	@Autowired
	private ExerciseService exerciseService;
	
	private final Logger logger = LoggerFactory.getLogger(ExerciseController.class);

    //Fetches the chest exercises from the database
	@GetMapping("/chest")
    public ResponseEntity<List<ExerciseModel>> getChestExercises() {
        try {
            List<ExerciseModel> chestExercises = exerciseService.getChestExercises();
            return new ResponseEntity<>(chestExercises, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching chest exercises", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Fetches the arm exercises from the database
    @GetMapping("/arms")
    public ResponseEntity<List<ExerciseModel>> getArmExercises() {
        try {
            List<ExerciseModel> armExercises = exerciseService.getArmExercises();
            return new ResponseEntity<>(armExercises, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching arm exercises", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Fetches the leg exercises from the database
    @GetMapping("/legs")
    public ResponseEntity<List<ExerciseModel>> getLegExercises() {
        try {
            List<ExerciseModel> legExercises = exerciseService.getLegExercises();
            return new ResponseEntity<>(legExercises, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching leg exercises", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Fetches the core exercises from the database
    @GetMapping("/core")
    public ResponseEntity<List<ExerciseModel>> getCoreExercises() {
        try {
            List<ExerciseModel> coreExercises = exerciseService.getCoreExercises();
            return new ResponseEntity<>(coreExercises, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching core exercises", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Fetches the shoulder exercises from the database
    @GetMapping("/shoulders")
    public ResponseEntity<List<ExerciseModel>> getShoulderExercises() {
        try {
            List<ExerciseModel> shoulderExercises = exerciseService.getShoulderExercises();
            return new ResponseEntity<>(shoulderExercises, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching shoulder exercises", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Fetches the back exercises from the database
    @GetMapping("/back")
    public ResponseEntity<List<ExerciseModel>> getBackExercises() {
        try {
            List<ExerciseModel> backExercises = exerciseService.getBackExercises();
            return new ResponseEntity<>(backExercises, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching back exercises", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
