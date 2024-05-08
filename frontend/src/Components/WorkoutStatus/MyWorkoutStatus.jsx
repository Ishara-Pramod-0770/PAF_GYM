import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserWorkoutStatus = () => {
    const [workoutStatus, setWorkoutStatus] = useState([]);

    useEffect(() => {
        // Fetch workout status data for the specific user with userId = 66351b211ad1e9229490cd57
        fetchUserWorkoutStatus();
    }, []);

    const fetchUserWorkoutStatus = async () => {
        try {
            const response = await axios.get('http://localhost:8443/user-workout-status/66351b211ad1e9229490cd57');
            setWorkoutStatus(response.data);
        } catch (error) {
            console.error('Error fetching user workout status:', error);
        }
    };

    return (
        <div>
            <h2>User Workout Status</h2>
            {workoutStatus.map(post => (
                <div key={post.id}>
                    {/* Display workout status details */}
                    <h3>User ID: {post.userId}</h3>
                    <p>Description: {post.description}</p>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
};

export default UserWorkoutStatus;
