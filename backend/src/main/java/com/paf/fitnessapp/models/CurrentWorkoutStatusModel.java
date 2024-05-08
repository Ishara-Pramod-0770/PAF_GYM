package com.paf.fitnessapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workout_status")
public class CurrentWorkoutStatusModel {
    @Id
    private String id;
    private String userId;
    private String description;
    private double distanceRun;
    private int pushupsCompleted;
    private double weightLifted;

    // Constructors
    public CurrentWorkoutStatusModel() {
        // Default constructor
    }

    public CurrentWorkoutStatusModel(String userId, String description, double distanceRun, int pushupsCompleted, double weightLifted) {
        this.userId = userId;
        this.description = description;
        this.distanceRun = distanceRun;
        this.pushupsCompleted = pushupsCompleted;
        this.weightLifted = weightLifted;
    }

    // Getters and setters
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getDistanceRun() {
        return distanceRun;
    }

    public void setDistanceRun(double distanceRun) {
        this.distanceRun = distanceRun;
    }

    public int getPushupsCompleted() {
        return pushupsCompleted;
    }

    public void setPushupsCompleted(int pushupsCompleted) {
        this.pushupsCompleted = pushupsCompleted;
    }

    public double getWeightLifted() {
        return weightLifted;
    }

    public void setWeightLifted(double weightLifted) {
        this.weightLifted = weightLifted;
    }
}
