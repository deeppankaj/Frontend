import React from "react";
import { Dashboard, DoctorControl, PatientControl, Sidebar } from "../features/Admin";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { userinfo } from "../Redux-toolkit/Slices/UserSlice";


const Admin = () => {
  const user  = useSelector(userinfo)
  const usertype=user?.usertype
  console.log(usertype);
  return (
    <section className="py-3 my-4">
      {usertype === "admin" ? (
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <Routes className="hi">
              <Route path="/" element={<Dashboard />} />
              <Route path="doctor" element={<DoctorControl />} />
              <Route path="patient" element={<PatientControl />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <h4 className="text-center m-5 p-5">
            {" "}
            Please register as doctor first to see this page
          </h4>
        </div>
      )}
    </section>
  );
};

export default Admin;
