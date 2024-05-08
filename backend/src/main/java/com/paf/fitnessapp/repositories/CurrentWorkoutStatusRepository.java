package com.paf.fitnessapp.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf.fitnessapp.models.CurrentWorkoutStatusModel;
import com.paf.fitnessapp.services.CurrentWorkoutStatusService;

@Repository

public interface CurrentWorkoutStatusRepository extends MongoRepository<CurrentWorkoutStatusModel, String> {

    CurrentWorkoutStatusModel save(Iterable<CurrentWorkoutStatusService> currentWorkoutStatusModel);

    List<CurrentWorkoutStatusModel> findByUserId(String userId);

    // Method for updating a workout status entry
    CurrentWorkoutStatusModel save(CurrentWorkoutStatusModel currentWorkoutStatusModel);

    // Method for deleting a workout status entry by its ID
    void deleteById(String id);

}