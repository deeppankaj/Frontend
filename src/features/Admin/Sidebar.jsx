import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md"
import { FaUserNurse } from "react-icons/fa"
const Sidebar = () => {
  const isNotActiveStyle = "navbar-link ps-2 active";
  const isActiveStyle = "navbar-link ps-2 ";
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 position-lg-fixed mt-lg-5 ms-lg-n1" style={{height:"800px !important"}} >
        <div className="rounded shadow overflow-hidden sticky-bar">
          <div className="card border-0">
            <img
              src="../assets/images/doctors/profile-bg.jpg"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
            <img
              src="../assets/images/doctors/01.jpg"
              className="rounded-circle shadow-md avatar avatar-md-md"
              alt=""
            />
            <h5 className="mt-3 mb-1">Dr. Calvin Carlo</h5>
            <p className="text-muted mb-0">Orthopedic</p>
          </div>

          <ul className="list-unstyled sidebar-nav mb-0">
            <li className="navbar-item active">
              <NavLink
              exact
                to="/admin" className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
               >
               <MdSpaceDashboard/> Dashboard
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink exact to="/admin/doctor" 
                 className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
              >
               <FaUserNurse/> Doctor
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink exact to="/admin/patient" 
                 className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
              >
               <FaUserNurse/> Patient
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 d-none d-lg-block"></div>
    </>
  );
};

export default Sidebar;
