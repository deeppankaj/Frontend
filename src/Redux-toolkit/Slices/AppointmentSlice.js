import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDoctorAppointment = createAsyncThunk(
  "fetchDoctorAppointment",
  async (emailval) => {
    try {
      let data
      const email = {
        doctorEmail:emailval
      }
      const response = await axios.post(`http://localhost:8000/getappointments`,email);
      console.log(response.data);
      if(typeof response!=="string"){
        data = response.data.reverse()
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const accepteAppointed = createAsyncThunk(
  "accepteAppointed",
  async (email) => {
    try {
      let data
      const response = await axios.get(`http://localhost:8000/doctor/getappointment/${email}`);
      if(typeof response!=="string"){
        data = response.data.reverse()
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
);


export const fetchPatientAppointment = createAsyncThunk(
    "fetchPatientAppointment",
    async (email) => {
      try {
        const response = await axios.get(`http://localhost:8000/patient/getappointment/${email}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );

const initialState = {
  doctorAppointments: [],
  patientAppointments: [],
  timing:[],
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.doctorAppointments = action.payload;
      })
      .addCase(fetchDoctorAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPatientAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatientAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.patientAppointments = action.payload;
      })
      .addCase(fetchPatientAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const appointmentSlicevalue = appointmentSlice.reducer;
export const getdoctorappointment = state=>state.Appointment.doctorAppointments;
export const getpatientappointment = state=>state.Appointment.patientAppointments;
export const gettiming = state=>state.Appointment.timing;
