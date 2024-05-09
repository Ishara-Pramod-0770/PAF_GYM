import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Card, CardContent } from '@mui/material';
import { Delete, Edit, ArrowBack } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const WorkoutStatusFeed = () => {
    const [workoutStatusPosts, setWorkoutStatusPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);
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
            const response = await axios.put(`http://localhost:8443/api/current-workout-status/${postIdToEdit}`, editedPost);
            const updatedPost = response.data; // Assuming the API returns the updated post
            
            // Update the edited post in the state
            setWorkoutStatusPosts(prevPosts =>
                prevPosts.map(post => (post.id === postIdToEdit ? updatedPost : post))
            );
            
            // Close edit dialog
            setEditDialogOpen(false);
            
            // Open edit confirmation dialog
            setEditConfirmationOpen(true);
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

    const handleEditConfirmationClose = () => {
        setEditConfirmationOpen(false);
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
                        <CardContent style={{ position: 'relative' }}>
                            <div style={{ width: '100%', height: '200px' }}>
                                <ResponsiveContainer>
                                    <BarChart
                                        data={[post]}
                                        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                                    >
                                        <XAxis dataKey="userId" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="distanceRun" fill="#8884d8" />
                                        <Bar dataKey="pushupsCompleted" fill="#82ca9d" />
                                        <Bar dataKey="weightLifted" fill="#ffc658" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
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
            {/* Edit Confirmation Dialog */}
            <Dialog open={editConfirmationOpen} onClose={handleEditConfirmationClose}>
                <DialogTitle>Edit Confirmation</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Post edited successfully!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditConfirmationClose} color="primary">OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default WorkoutStatusFeed;
