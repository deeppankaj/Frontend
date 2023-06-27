import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientDetail: {},
  doctorDetail: {},
};

const signupSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser(state, action) {
      state.userdetail = action.payload;
    },
    addDoctor(state, action) {
      state.doctorDetail = action.payload;
    },
    addPatient(state, action) {
      state.patientDetail = action.payload;
    },
  },
  
});
export const { addUser, addDoctor, addPatient } = signupSlice.actions;
export const SignUpSlicevalue = signupSlice.reducer;
