import axios from "axios";

const BASE_URL = "http://localhost:8080/api/workout-plans"

export const createWorkoutPlan = (payload) => axios.post(`${BASE_URL}`, payload);
export const fetchUserWorkoutPlans = (userId) => axios.get(`${BASE_URL}/users/${userId}`);
export const fetchWorkouPlanByStatus = (status) => axios.get(`${BASE_URL}/status/${status}`)