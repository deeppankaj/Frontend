import React from "react";
import Dashboard from "../features/patient-dash/Dashboard";
import SidebarPatient from "../features/patient-dash/Sidebar";
import { useSelector } from "react-redux";

const PatientPage = () => {
  const usertype = useSelector((state) => state.User?.data?.usertype);
  return (
    <>
      <section className="py-3 ">
        <div className="container-fluid">
          <div className="row">
            {usertype === "patient" ? (
              <>
                <SidebarPatient />
                <Dashboard />
              </>
            ) : (
              <div>
                <h4 className="text-center m-5 p-5">
                  {" "}
                  Please register as patient first to see this page
                </h4>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientPage;
