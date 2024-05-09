import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Delete, Edit, ArrowBack } from '@mui/icons-material';

const WorkoutStatusFeed = () => {
    const [workoutStatusPosts, setWorkoutStatusPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [postIdToEdit, setPostIdToEdit] = useState(null);
    const [editedPost, setEditedPost] = useState({
        description: '',
        distanceRun: 0,
        pushupsCompleted: 0,
        weightLifted: 0
    });

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
            await axios.delete(`http://localhost:8443/api/current-workout-status/${postId}`);
            // Remove the deleted post from the state
            setWorkoutStatusPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleEdit = (post) => {
        setPostIdToEdit(post.id);
        setEditedPost({
            description: post.description,
            distanceRun: post.distanceRun,
            pushupsCompleted: post.pushupsCompleted,
            weightLifted: post.weightLifted
        });
        setEditDialogOpen(true);
    };

    const handleCloseEditDialog = () => {
        setEditDialogOpen(false);
        setPostIdToEdit(null);
    };

    const handleSaveEdit = async () => {
        try {
            await axios.put(`http://localhost:8443/api/current-workout-status/${postIdToEdit}`, editedPost);
            // Close edit dialog
            setEditDialogOpen(false);
            // Update the edited post in the state
            setWorkoutStatusPosts(prevPosts => prevPosts.map(post => post.id === postIdToEdit ? { ...post, ...editedPost } : post));
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedPost(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                                <IconButton aria-label="edit" onClick={() => handleEdit(post)}>
                                    <Edit />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => handleDelete(post.id)}>
                                    <Delete />
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card>
                ))
            )}
            {/* Edit Dialog */}
            <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Post</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={editedPost.description}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Distance Run (km)"
                        name="distanceRun"
                        type="number"
                        value={editedPost.distanceRun}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Pushups Completed"
                        name="pushupsCompleted"
                        type="number"
                        value={editedPost.pushupsCompleted}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Weight Lifted (lbs)"
                        name="weightLifted"
                        type="number"
                        value={editedPost.weightLifted}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleSaveEdit} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default WorkoutStatusFeed;
