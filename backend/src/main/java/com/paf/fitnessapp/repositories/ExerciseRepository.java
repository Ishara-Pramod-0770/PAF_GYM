package com.paf.fitnessapp.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf.fitnessapp.models.ExerciseModel;

@Repository
public interface ExerciseRepository extends MongoRepository<ExerciseModel, String> {

	List<ExerciseModel> findByFocusMuscleGroup(String string);
	
}
