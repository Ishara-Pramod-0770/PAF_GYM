import { Grid } from "@mui/material";
import React from "react";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TwitDetails from "../TwitDetails/TwitDetails";
import WorkoutPlans from "../WorkoutPlans/WorkoutPlans";
import WorkoutStatus from "../WorkoutStatus/WorkoutStatus";
import MealPlans from "../MealPlans/MealPlans";
import CustomDrawer from "../Drawer/CustomDrawer";
import CreateWorkoutPlan from "../WorkoutPlans/CreateWorkoutPlan";
import WorkoutStatusFeed from "../WorkoutStatus/WorkoutStatusFeed";


export default function HomePage() {
  return (
    <div>
      <Grid container spacing={2} sx={{ marginLeft:2}}>
        <CustomDrawer />
        <Grid item xs={8}>
          <Routes>
            <Route path="/" element={<HomeSection />}></Route>
            <Route path="/home" element={<HomeSection />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
            <Route path="/twit/:id" element={<TwitDetails />}></Route>
            <Route path="/workout-plans" element={<WorkoutPlans />}></Route>
            <Route path="/workout-status" element={<WorkoutStatus />}></Route>
            <Route path="/meal-plans" element={<MealPlans />}></Route>
            <Route path="/create-workout-plan" element={<CreateWorkoutPlan />}></Route>
            <Route path="/workout-status-feed" element={ <WorkoutStatusFeed />}></Route>
          </Routes>
        </Grid>
        <Grid item xs={2}>
          <RightPart />
        </Grid>
      </Grid>
    </div>
  );
}