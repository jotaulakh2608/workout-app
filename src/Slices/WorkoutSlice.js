import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

const WorkoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    CreateWorkout(state, action) {
      state.workouts = [...state.workouts, action.payload];
    },
    SetWorkout(state, action) {
      state.workouts = action.payload;
    },
    DeleteWorkout(state, action) {
      state.workouts = state.workouts.filter(
        (e) => e._id !== action.payload._id
      )
    },
    UpdateWorkout(state, action) {
const user=state.workouts.find(e=>e._id===action.payload._id)
if(user){
    user.title= action.payload.title
    user.load= action.payload.load
    user.reps= action.payload.reps
}
    }
  }
});

export const { CreateWorkout, SetWorkout, DeleteWorkout, UpdateWorkout, ClearWorkouts } =
  WorkoutSlice.actions;

export default WorkoutSlice.reducer;
