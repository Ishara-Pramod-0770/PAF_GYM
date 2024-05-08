import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress, IconButton } from '@mui/material';
import { Delete, Edit, ArrowBack } from '@mui/icons-material'; // Importing ArrowBack icon

const WorkoutStatusFeed = () => {
    const [workoutStatusPosts, setWorkoutStatusPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWorkoutStatusPosts();
    }, []);

    const fetchWorkoutStatusPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8443/api/current-workout-status');
            setWorkoutStatusPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching workout status posts:', error);
            setLoading(false);
        }
    };

    const handleDelete = async (postId) => {
        try {
            // Add delete logic here
            console.log('Deleting post with ID:', postId);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleEdit = async (postId) => {
        try {
            // Add edit logic here
            console.log('Editing post with ID:', postId);
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

    return (
        <div>
            <IconButton aria-label="back" onClick={() => window.history.back()}>
                <ArrowBack />
            </IconButton>
            <Typography variant="h4" gutterBottom>
                Workout Status Feed
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : workoutStatusPosts.length === 0 ? (
                <Typography variant="body1">No workout status posts found.</Typography>
            ) : (
                workoutStatusPosts.map(post => (
                    <Card key={post.id} style={{ marginBottom: '20px' }}>
                        <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Typography variant="h6" component="h2">
                                    User ID: {post.userId}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" gutterBottom>
                                    {post.description}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Distance Run: {post.distanceRun} km
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Pushups Completed: {post.pushupsCompleted}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Weight Lifted: {post.weightLifted} lbs
                                </Typography>
                            </div>
                            <div>
                                <IconButton aria-label="delete" onClick={() => handleDelete(post.id)}>
                                    <Delete />
                                </IconButton>
                                <IconButton aria-label="edit" onClick={() => handleEdit(post.id)}>
                                    <Edit />
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};

export default WorkoutStatusFeed;
