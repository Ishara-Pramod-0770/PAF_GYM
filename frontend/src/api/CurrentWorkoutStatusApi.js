import axios from "axios";

const BASE_URL = "http://localhost:8443/api/current-workout-status"; // Assuming this is the base URL for the current workout status API

export const createCurrentWorkoutStatus = (payload) => axios.post(BASE_URL, payload);
export const getAllCurrentWorkoutStatus = () => axios.get(BASE_URL);
export const fetchUserWorkoutStatus = (userId) => axios.get(`http://localhost:8443/user-workout-status/${userId}`);
