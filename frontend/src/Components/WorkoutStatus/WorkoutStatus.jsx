import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";
import { createCurrentWorkoutStatus } from "../../api/CurrentWorkoutStatusApi";

export default function CreateCurrentWorkoutStatusForm() {
  const [description, setDescription] = useState("");
  const [distanceRun, setDistanceRun] = useState("");
  const [pushupsCompleted, setPushupsCompleted] = useState("");
  const [weightLifted, setWeightLifted] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const data = {
      description: description,
      distanceRun: distanceRun === ""? null : parseInt(distanceRun),
      pushupsCompleted: pushupsCompleted === ""? null : parseInt(pushupsCompleted),
      weightLifted: weightLifted === ""? null : parseInt(weightLifted),
    };

    createCurrentWorkoutStatus(data)
      .then((response) => {
        console.log("Current workout status created successfully:", response.data);
        // Reset form fields after successful submission
        setDescription("");
        setDistanceRun(0);
        setPushupsCompleted(0);
        setWeightLifted(0);
        setError(null);
      })
      .catch((error) => {
        console.error("Error creating current workout status:", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Create Current Workout Status</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            label="Distance Run"
            value={distanceRun}
            onChange={(e) => setDistanceRun(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            label="Pushups Completed"
            value={pushupsCompleted}
            onChange={(e) => setPushupsCompleted(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Weight Lifted"
            value={weightLifted}
            onChange={(e) => setWeightLifted(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Typography color="error">{error}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Current Workout Status
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
