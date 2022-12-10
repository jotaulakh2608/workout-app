import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slices/UserSlice'
import WorkoutSlice from './Slices/WorkoutSlice'

const store = configureStore({
    reducer:{
        user:UserSlice,
        workout:WorkoutSlice,
    }
})

export default store