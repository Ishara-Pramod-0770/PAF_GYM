package com.paf.fitnessapp.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "exercises")
public class ExerciseModel {
    private String exerciseId;
    private String exercise;
    private String reps;
    private String sets;
    private String focusMuscleGroup;
    
	public ExerciseModel(String exerciseId, String exercise, String focusMuscleGroup, String reps, String sets) {
		super();
		this.exerciseId = exerciseId;
		this.exercise = exercise;
		this.focusMuscleGroup = focusMuscleGroup;
		this.reps = reps;
		this.sets = sets;
	}
	
	public String getExerciseId() {
		return exerciseId;
	}
	
	public void setExerciseId(String exerciseId) {
		this.exerciseId = exerciseId;
	}
	
	public String getExercise() {
		return exercise;
	}
	
	public void setExercise(String exercise) {
		this.exercise = exercise;
	}
	
	public String getReps() {
		return reps;
	}
	
	public void setReps(String reps) {
		this.reps = reps;
	}
	
	public String getSets() {
		return sets;
	}
	
	public void setSets(String sets) {
		this.sets = sets;
	}
	
	public String getFocusMuscleGroup() {
		return focusMuscleGroup;
	}
	
	public void setFocusMuscleGroup(String focusMuscleGroup) {
		this.focusMuscleGroup = focusMuscleGroup;
	}
}