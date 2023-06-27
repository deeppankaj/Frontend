import React from "react";
import { appointment, doctor, order, patient, product, user } from "../../assests/";

const Dashboard = () => {
  return (
    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-5 pt-md-0">
      <h5 className="mb-0">Dashboard</h5>
      <div className="row">
        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <div className="d-flex gap-3 p-4 border-bottom align-items-center">
              <div className="flex explore-icon" style={{height:"50px"}}>
                <img src={user} alt="" width={50} />
              </div>
              <h5 style={{ fontWeight: 500 }} className="mb-0 ">
                User : {5}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <div className="d-flex gap-3 p-4 border-bottom align-items-center">
            <div className="flex explore-icon" style={{height:"50px"}}>
                <img src={doctor} alt="" width={50} />
              </div>
              <h5 style={{ fontWeight: 500 }} className="mb-0 ">
                Doctors : {5}
              </h5>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <div className="d-flex gap-3 p-4 border-bottom align-items-center">
            <div className="flex explore-icon" style={{height:"50px"}}>
                <img src={patient} alt="" width={60} />
              </div>
              <h5 style={{ fontWeight: 500 }} className="mb-0 ">
                Patients : {5}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <div className="d-flex gap-3 p-4 border-bottom align-items-center">
            <div className="flex explore-icon" style={{height:"50px"}}>
                <img src={appointment} alt="" width={50} />
              </div>
              <h5 style={{ fontWeight: 500 }} className="mb-0 ">
                Appointment : {5}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <div className="d-flex gap-3 p-4 border-bottom align-items-center">
            <div className="flex " style={{height:"50px"}}>
                <img src={product} alt="" width={60} />
              </div>
              <h5 style={{ fontWeight: 500 }} className="mb-0 ">
                Products : {5}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <div className="d-flex gap-3 p-4 border-bottom align-items-center">
            <div className="flex explore-icon" style={{height:"50px"}}>
                <img src={order} alt="" width={60} />
              </div>
              <h5 style={{ fontWeight: 500 }} className="mb-0 ">
                Orders : {5}
              </h5>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
