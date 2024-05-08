package com.paf.fitnessapp.services;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf.fitnessapp.models.CurrentWorkoutStatusModel;
import com.paf.fitnessapp.repositories.CurrentWorkoutStatusRepository;

@Service
public class CurrentWorkoutStatusService {
    
    @Autowired
    private CurrentWorkoutStatusRepository currentWorkoutStatusRepository;
    
    public CurrentWorkoutStatusModel createCurrentWorkoutStatus(CurrentWorkoutStatusModel currentWorkoutStatusModel) {
        return currentWorkoutStatusRepository.save(currentWorkoutStatusModel);
    }

    public List<CurrentWorkoutStatusModel> getAllCurrentWorkoutStatus() {
        return currentWorkoutStatusRepository.findAll();
    }

    public List<CurrentWorkoutStatusModel> getWorkoutStatusByUserId(String userId) {
        return currentWorkoutStatusRepository.findByUserId(userId);
    }

    public CurrentWorkoutStatusModel updateCurrentWorkoutStatus(String id, CurrentWorkoutStatusModel updatedWorkoutStatus) {
        return currentWorkoutStatusRepository.save(updatedWorkoutStatus);
    }

    public void deleteCurrentWorkoutStatusById(String id) {
        currentWorkoutStatusRepository.deleteById(id);
    }

    public CurrentWorkoutStatusModel getCurrentWorkoutStatusById(String id) {
        Optional<CurrentWorkoutStatusModel> result = currentWorkoutStatusRepository.findById(id);
        return result.orElse(null);
    }
}
