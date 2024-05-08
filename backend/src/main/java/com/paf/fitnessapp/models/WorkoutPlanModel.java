package com.paf.fitnessapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workout_plans")
public class WorkoutPlanModel {
	 @Id
    private String id;
	private String userId;
    private String title;
    private String dateCreated;
    private String userName;
    private String age;
    private ExerciseModel[] exercises;
    private String status;
    
    public WorkoutPlanModel() {}
    
	public WorkoutPlanModel(String id,  String userId, String title, String dateCreated, String userName, String age,
			ExerciseModel[] exercises, String status) {
		super();
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.dateCreated = dateCreated;
		this.userName = userName;
		this.age = age;
		this.exercises = exercises;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public ExerciseModel[] getExercises() {
		return exercises;
	}

	public void setExercises(ExerciseModel[] exercises) {
		this.exercises = exercises;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
