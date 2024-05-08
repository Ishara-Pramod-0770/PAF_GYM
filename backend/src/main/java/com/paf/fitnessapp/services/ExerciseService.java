package com.paf.fitnessapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf.fitnessapp.models.ExerciseModel;
import com.paf.fitnessapp.repositories.ExerciseRepository;

@Service
public class ExerciseService {
	@Autowired
	 private ExerciseRepository exerciseRepository;
	 
	 public List<ExerciseModel> getChestExercises() {
	        return exerciseRepository.findByFocusMuscleGroup("Chest");
	 }
	 
	 public List<ExerciseModel> getArmExercises() {
	        return exerciseRepository.findByFocusMuscleGroup("Arms");
	 }
	 
	 public List<ExerciseModel> getLegExercises() {
	        return exerciseRepository.findByFocusMuscleGroup("Legs");
	 }
	 
	 public List<ExerciseModel> getCoreExercises() {
	        return exerciseRepository.findByFocusMuscleGroup("Core");
	 }
	 
	 public List<ExerciseModel> getShoulderExercises() {
	        return exerciseRepository.findByFocusMuscleGroup("Shoulders");
	 }
	 
	 public List<ExerciseModel> getBackExercises() {
	        return exerciseRepository.findByFocusMuscleGroup("Back");
	 }
}
