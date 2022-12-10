import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
  open:false
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
    },
    Open(state, action){
      state.open=true
    },
    Close(state){
      state.open=false
    }
  }
});

export const { CreateWorkout, SetWorkout, DeleteWorkout, UpdateWorkout, ClearWorkouts, Open, Close} =
  WorkoutSlice.actions;

export default WorkoutSlice.reducer;
