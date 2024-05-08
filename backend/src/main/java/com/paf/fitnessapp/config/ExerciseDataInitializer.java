package com.paf.fitnessapp.config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import com.paf.fitnessapp.models.ExerciseModel;
import com.paf.fitnessapp.repositories.ExerciseRepository;

import java.util.List;

@Component
public class ExerciseDataInitializer implements ApplicationRunner {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private ExerciseRepository exerciseRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // Check if the collection exists
        if (!mongoTemplate.collectionExists("exercises")) {
            // Collection does not exist, insert data
            List<ExerciseModel> defaultExercises = createDefaultExercises();
            try {
                exerciseRepository.saveAll(defaultExercises);
                System.out.println("Default exercises saved successfully.");
            } catch (Exception e) {
                System.err.println("Failed to save default exercises: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }

    private List<ExerciseModel> createDefaultExercises() {
        // Create a list of default exercises
        List<ExerciseModel> defaultExercises = List.of(
        		new ExerciseModel("E001", "Bench Press", "Chest", "08", "02"),
        	    new ExerciseModel("E002", "Decline Bench Press", "Chest", "08", "02"),
        	    new ExerciseModel("E003", "Incline Bench Press", "Chest", "08", "02"),
        	    new ExerciseModel("E004", "Leg Press", "Legs", "08", "02"),
        	    new ExerciseModel("E005", "Shoulder Press", "Shoulders", "08", "02"),
        	    new ExerciseModel("E006", "Squat", "Legs", "08", "02"),
        	    new ExerciseModel("E007", "Deadlift", "Legs", "08", "02"),
        	    new ExerciseModel("E008", "Pull-up", "Back", "08", "02"),
        	    new ExerciseModel("E009", "Push-up", "Chest", "08", "02"),
        	    new ExerciseModel("E010", "Dumbbell Row", "Back", "08", "02"),
        	    new ExerciseModel("E011", "Bicep Curl", "Arms", "08", "02"),
        	    new ExerciseModel("E012", "Tricep Dip", "Arms", "08", "02"),
        	    new ExerciseModel("E013", "Lunges", "Legs", "08", "02"),
        	    new ExerciseModel("E014", "Plank", "Core", "08", "02"),
        	    new ExerciseModel("E015", "Russian Twist", "Core", "08", "02"),
        	    new ExerciseModel("E016", "Hammer Curl", "Arms", "08", "02"),
        	    new ExerciseModel("E017", "Chest Fly", "Chest", "08", "02"),
        	    new ExerciseModel("E018", "Front Squat", "Legs", "08", "02"),
        	    new ExerciseModel("E019", "Calf Raise", "Legs", "08", "02"),
        	    new ExerciseModel("E020", "Barbell Row", "Back", "08", "02"),
        	    new ExerciseModel("E021", "Crunches", "Core", "08", "02"),
        	    new ExerciseModel("E022", "Side Plank", "Core", "08", "02"),
        	    new ExerciseModel("E023", "Romanian Deadlift", "Legs", "08", "02"),
        	    new ExerciseModel("E024", "Shoulder Shrug", "Shoulders", "08", "02"),
        	    new ExerciseModel("E025", "Reverse Fly", "Back", "08", "02"),
        	    new ExerciseModel("E026", "Lat Pulldown", "Back", "08", "02"),
        	    new ExerciseModel("E027", "Leg Curl", "Legs", "08", "02"),
        	    new ExerciseModel("E028", "Seated Row", "Back", "08", "02"),
        	    new ExerciseModel("E029", "Bent Over Row", "Back", "08", "02"),
        	    new ExerciseModel("E030", "Cable Crunch", "Core", "08", "02"),
        	    new ExerciseModel("E031", "Arnold Press", "Shoulders", "08", "02"),
        	    new ExerciseModel("E032", "Cable Crossover", "Chest", "08", "02"),
        	    new ExerciseModel("E033", "Hack Squat", "Legs", "08", "02"),
        	    new ExerciseModel("E034", "Military Press", "Shoulders", "08", "02"),
        	    new ExerciseModel("E035", "Hyperextension", "Back", "08", "02"),
        	    new ExerciseModel("E036", "Leg Extension", "Legs", "08", "02"),
        	    new ExerciseModel("E037", "Pull Down", "Back", "08", "02"),
        	    new ExerciseModel("E038", "Leg Raise", "Core", "08", "02"),
        	    new ExerciseModel("E039", "Machine Chest Press", "Chest", "08", "02"),
        	    new ExerciseModel("E040", "Dumbbell Shoulder Press", "Shoulders", "08", "02"),
        	    new ExerciseModel("E041", "Skull Crusher", "Arms", "08", "02"),
        	    new ExerciseModel("E042", "Standing Calf Raise", "Legs", "08", "02"),
        	    new ExerciseModel("E043", "Preacher Curl", "Arms", "08", "02"),
        	    new ExerciseModel("E044", "Seated Leg Curl", "Legs", "08", "02"),
        	    new ExerciseModel("E045", "Machine Shoulder Press", "Shoulders", "08", "02"),
        	    new ExerciseModel("E046", "Leg Adduction", "Legs", "08", "02"),
        	    new ExerciseModel("E047", "Leg Abduction", "Legs", "08", "02"),
        	    new ExerciseModel("E048", "Lateral Raise", "Shoulders", "08", "02"),
        	    new ExerciseModel("E049", "Plank Jacks", "Core", "08", "02"),
        	    new ExerciseModel("E050", "Woodchopper", "Core", "08", "02")
        );
        return defaultExercises;
    }

}
