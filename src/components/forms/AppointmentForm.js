import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { setLoading } from "../loading/loadingSlice";

const AppointmentForm = ({ hide }) => {
  //* Fetching User from react toolkit store
  const user = useSelector((state) => state.User.data);

  //* Intializing dispatch
  // const dispatch = useDispatch();

  //* Empty data for form
  const data = {
    patientname: `${user?.firstname} ${user?.lastname}`,
    pateintemail: `${user?.email}`,
    patientmobile: ``,
    department: "",
    doctoremail: "",
    appointmentdate: "",
    appointmenttime: "",
    patientdiscription: "",
    status: "pending",
  };
  //* variables used in this page
  const [formdata, setFormdata] = useState(data);
  const [available, setAvailable] = useState(false);
  //* time option for select during booking an appointment
  const times = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 AM",
    "12:30 PM",
    "01:00 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ];

  //* fetching doctor data from database to show the doctors in form
  const getDoc = async () => {
    const data = await axios.get("http://localhost:8000/doctor");
    setDoctors(data.data);
  };
  //* Intallizing all function on page rendering
  useEffect(() => {
    getDoc();
  }, []);

  //* Function for add appointment to doctor's appointment list
  const addAppointment = async (value) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/doctor/appointment",
        value
      );
      toast.success(response.data);
      hide();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkAppointment = async (e) => {
    e.preventDefault();
    if (formdata.appointmenttime !== "") {
      const data = {
        time: formdata.appointmenttime,
        date: formdata.appointmentdate,
      };
      try {
        const response = await axios.post(
          `http://localhost:8000/doctor/checkappointment/${formdata.doctoremail}`,
          data
        );
        if(response.data.available===true){
          setAvailable(response.data.available)
          toast.success("Appointment is available for booking");
        }else{
          toast.info("Appointment for selected date and time is not available")
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Please Select doctor and date ");
    }
  };

  const [doctors, setDoctors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(available){      
      addAppointment(formdata);
      setAvailable(false)
    }else{
      toast.info("Please check doctor is available for selected time")
    }
  };

  return (
    <div className="modal-body p-3 pt-4">
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Patient Name <span className="text-danger">*</span>
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className="form-control"
                placeholder="Patient Name :"
                disabled={true}
                value={data.patientname}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Your Email <span className="text-danger">*</span>
              </label>
              <input
                name="email"
                id="email"
                type="email"
                className="form-control"
                value={data.pateintemail}
                disabled={true}
                placeholder="Your email :"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Your Phone <span className="text-danger">*</span>
              </label>
              <input
                name="phone"
                id="phone"
                type="tel"
                className="form-control"
                onChange={(e) =>
                  setFormdata({ ...formdata, patientmobile: e.target.value })
                }
                placeholder="Your Phone :"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label className="form-label">Departments</label>
              <select
                className="form-select form-control"
                onChange={(e) =>
                  setFormdata({ ...formdata, department: e.target.value })
                }
              >
                <option>Select Department</option>
                <option>General</option>
                <option>Eye Care</option>
                <option>Gynecologist</option>
                <option>Psychotherapist</option>
                <option>Orthopedic</option>
                <option>Dentist</option>
                <option>Gastrologist</option>
                <option>Urologist</option>
                <option>Neurologist</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label className="form-label">Doctor</label>
              <select
                className="form-select form-control"
                onChange={(e) =>
                  setFormdata({ ...formdata, doctoremail: e.target.value })
                }
              >
                <option>Select Doctor</option>
                {doctors &&
                  doctors.map((doc, i) => {
                    return (
                      <option key={i} value={doc?.email}>
                        {`${doc.firstname} ${doc.lastname}`}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3" style={{ position: "relative" }}>
              <label className="form-label"> Date : </label>
              <input
                name="date"
                type="date"
                className="form-control start"
                onChange={(e) => {
                  // const today = new Date();
                  // console.log(today,e.target.value);
                  setFormdata({ ...formdata, appointmentdate: e.target.value });
                }}
                placeholder="Select date :"
              />
              <div className="qs-datepicker-container qs-hidden">
                {/* QS Datepicker content */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="input-time">
                Time :{" "}
              </label>
              <select
                className="form-control timepicker"
                id="input-time"
                onChange={(e) =>
                  setFormdata({ ...formdata, appointmenttime: e.target.value })
                }
              >
                <option> Select Time</option>
                {times.map((time, i) => (
                  <option key={i}>{time}</option>
                ))}
              </select>
              {/* <input
                name="time"
                type="time"
                
                onChange={(e) =>
                  setFormdata({ ...formdata, appointmenttime: e.target.value })
                }
                placeholder="03:30 PM"
              /> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="mb-3 "
              style={{ position: "relative", marginTop: "30px" }}
            >
              <label className="form-label"></label>
              <button
                onClick={(e) => checkAppointment(e)}
                className="btn bg-soft-primary form-control"
              >
                Check Availblity
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mb-3">
              <label className="form-label">
                Discription <span className="text-danger">*</span>
              </label>
              <textarea
                name="comments"
                rows="4"
                className="form-control"
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    patientdiscription: e.target.value,
                  })
                }
                placeholder="Your Message :"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-grid">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-primary"
                disabled={!available}
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
