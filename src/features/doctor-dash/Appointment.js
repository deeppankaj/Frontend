import React, { useState } from "react";
import { Link } from "react-router-dom";
import CenteredModal from "../../components/Modal";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import userimg from "../../assests/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDoctorAppointment, getdoctorappointment } from "../../Redux-toolkit/Slices/AppointmentSlice";

const Appointment = ({user}) => {
  
  const dispatch = useDispatch();
  const appointment = useSelector(getdoctorappointment);
  
  const [appointments, setappointments] = useState([])
  
   useEffect(()=>{
     dispatch(fetchDoctorAppointment(user.email))   
  },[dispatch]);

  const convertTo24HourFormat = (time) => {
    const [hour, minute, period] = time.split(' ');
    let [hourNumeric] = hour.split(':');
    hourNumeric = parseInt(hourNumeric);

    if (period === 'PM' && hourNumeric !== 12) {
      hourNumeric += 12;
    }

    return `${hourNumeric.toString().padStart(2, '0')}:${minute}`;
  };

  useEffect(() => {
    setappointments(appointment);
  }, [appointment])
  
  
  

  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = useState();
  const [Modalheading, setModalheading] = useState("");

  return (
    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
      <div className="row">
        <div className="col-xl-9 col-lg-6 col-md-4">
          <h5 className="mb-0">Appointment</h5>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
          <div className="justify-content-md-end">
            <div>
              <div className="row justify-content-between align-items-center">
                <div className="col-sm-12 col-md-5">
                  <div className="mb-0 position-relative">
                    <select className="form-select form-control">
                      <option value="EY">Today</option>
                      <option value="GY">Tomorrow</option>
                      <option value="PS">Yesterday</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                  <div className="d-grid">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setModalShow(true);
                        setModalheading("Book an Appointment");
                        setModalData("form");
                      }}
                    >
                      Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="table-responsive bg-white shadow rounded">
            <table className="table mb-0 table-center">
              <thead>
                <tr>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "50px" }}
                  >
                    #
                  </th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "180px" }}
                  >
                    Name
                  </th>
                  <th className="border-bottom p-3">Age</th>
                  <th className="border-bottom p-3">Gender</th>
                  <th className="border-bottom p-3">Department</th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "150px" }}
                  >
                    Date
                  </th>
                  <th className="border-bottom p-3">Time</th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "220px" }}
                  >
                    Doctor
                  </th>
                  <th className="border-bottom p-3">Fees</th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "150px" }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {appointments.length!==0 && (<>{appointments.map((patient, i) => {
                      return (
                        <tr key={i}>
                          <th className="p-3">{i+1}</th>
                          <td className="p-3">
                            <Link to="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img
                                  src={userimg}
                                  className="avatar avatar-md-sm rounded-circle shadow"
                                  alt=""
                                  style={{ height: "40px", width: "40px" }}
                                />
                                <span className="ms-2 text-capitalize">{patient.patientName}</span>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">{patient?.patientAge}</td>
                          <td className="p-3">{patient?.patientGender}</td>
                          <td className="p-3">{patient?.department}</td>
                          <td className="p-3">{patient?.date}</td>
                          <td className="p-3">{patient?.time}</td>
                          <td className="p-3">
                            <Link to="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img
                                  src={userimg}
                                  className="avatar avatar-md-sm rounded-circle border shadow"
                                  alt=""
                                  style={{ height: "40px", width: "40px" }}
                                />
                                <span className="ms-2">
                                  {`${user?.firstname} ${user?.lastname} `}
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">50$</td>
                          <td className="text-end p-3 gap-1">
                            <div className="flex gap-2">
                              <button
                                className="btn btn-icon btn-pills bg-soft-primary"
                                onClick={() => {
                                  setModalShow(true);
                                  setModalData(patient);
                                  setModalheading("Appointment Details");
                                }}
                              >
                                <AiOutlineEye />
                              </button>

                              <button
                                className="btn btn-icon btn-pills bg-soft-success"
                                onClick={() => {
                                  setModalShow(true);
                                  setModalheading("");
                                  setModalData("appointment");
                                }}
                              >
                                <RxCheckCircled />
                              </button>
                              <button
                                className="btn btn-icon btn-pills bg-soft-danger"
                                onClick={() => {
                                  setModalShow(true);
                                  setModalheading("");
                                  setModalData("not-accepted");
                                }}
                              >
                                <RxCrossCircled />
                              </button>
                            </div>
                            <CenteredModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                              data={modalData}
                              heading={Modalheading}
                            />
                          </td>
                        </tr>
                      );
                    })}</>)}
              </tbody>
            </table>
                {appointments.length===0  && (<div className="col-12 h5 text-center p-5">No appointment found</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
