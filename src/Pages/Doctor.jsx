import React from "react";
import Sidebar from "../features/doctor-dash/Sidebar";
import { Route, Routes } from "react-router-dom";
import {
  Appointment,
  Chat,
  Dashboard,
  DocProfile,
  DocfileSetting,
  Invoices,
  Messages,
  PatientReview,
  Patients,
  Shedule,
} from "../features/doctor-dash";
import { useSelector } from "react-redux";

const Doctor = () => {
  const user = useSelector(state=>state.User?.data)
  const usertype = useSelector(state=>state.User?.data?.usertype)

  console.log();
  return (
    <>
      <section className="py-3 ">
        {usertype==="doctor"?<div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Routes className="hi">
              <Route path="*" element={<Dashboard />} />
              <Route path="appointment" element={<Appointment user={user}/>} />
              <Route path="schedule" element={<Shedule />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="message" element={<Messages />} />
              <Route path="profile" element={<DocProfile />} />
              <Route path="profile-setting" element={<DocfileSetting />} />
              <Route path="patients" element={<Patients />} />
              <Route path="patient-review" element={<PatientReview />} />
              <Route path="chat" element={<Chat />} />
            </Routes>
          </div>
        </div>:(<div>
              <h4 className="text-center m-5 p-5"> Please register as doctor first to see this page</h4>
            </div>)}
      </section>
    </>
  );
};

export default Doctor;
