import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    id:null
};

const UserSlice = createSlice({
    name: "user",
    initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logOut(state, action) {
        state.user= null
    },
    idChange(state, action){
      state.id=action.payload
    }
  },
});



export const {login, logOut, idChange}= UserSlice.actions

export default UserSlice.reducer
