import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    challenges: [],
    loading: false,
    error: null,
};

export const challengesSlice = createSlice({
    name: "challenges",
    initialState,
    reducers: {
        getChallenges: (state) => {
            state.loading = true;
        },
        getChallengesSuccess: (state, action) => {
            state.challenges = action.payload;
            state.loading = false;
            state.error = null;
        },
        getChallengesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getChallenges, getChallengesSuccess, getChallengesFailure } = challengesSlice.actions;

export default challengesSlice.reducer;