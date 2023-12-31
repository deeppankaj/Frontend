import React, { useState } from "react";
import { BsDropletHalf, BsHeart, BsHeartFill } from "react-icons/bs";
// import {  BsEmojiSmile, BsMessenger, BsPaperclip } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbBrandTelegram, TbClipboardText } from "react-icons/tb";
import { Circle } from "rc-progress";
import ReactApexChart from "react-apexcharts";
import { RiTimerFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import CenteredModal from "../../components/Modal";

const Dashboard = () => {
  const chart1 = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#f0735a"],
      xaxis: {
        labels: {
          show: false, // Set to false to hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          show: false, // Set to false to hide y-axis labels
        },
      },
    },
  };
  const chart2 = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#53c797"],
      xaxis: {
        labels: {
          show: false, // Set to false to hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          show: false, // Set to false to hide y-axis labels
        },
      },
    },
  };
  const docShedule = [
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
    {
      docName: "Dr.Pankaj Kumar",
      from: "09:00 AM",
      to: "10:00 AM",
      checkup: "Cardiology",
    },
  ];
  const Process = [
    {
      name: "Treatment report",
      percent: "86%",
    },
    {
      name: "Treatment report",
      percent: "86%",
    },
    {
      name: "Treatment report",
      percent: "86%",
    },
    {
      name: "Treatment report",
      percent: "86%",
    },
    {
      name: "Treatment report",
      percent: "86%",
    },
    {
      name: "Treatment report",
      percent: "86%",
    },
  ];
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = useState();
  const [Modalheading, setModalheading] = useState("");

  return (
    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-4 pt-md-0">
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalData}
        heading={Modalheading}
      />
      <h5 className="mb-0">Dashboard</h5>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-12">
          <div className="row">
            <div className="col-12 mt-4 pt-2">
              <div className="card border-0 rounded shadow">
                <div className="d-flex justify-content-between px-4 pt-4">
                  <h6 className="align-items-center mb-0">
                    Water{" "}
                    <span className="badge rounded-pill bg-soft-primary ms-1">
                      93%
                    </span>
                  </h6>
                  <BsDropletHalf color="#396cf0" fontSize={25} />
                </div>
                <div
                  id="rchart-1 p-5"
                  style={{ minHeight: "198.7px", padding: "25px" }}
                >
                  <span
                    className="position-absolute"
                    style={{ marginTop: "35%", marginLeft: "35%" }}
                  >
                    93%
                  </span>
                  <Circle
                    percent={93}
                    strokeWidth={3}
                    strokeColor="#396cf0"
                    trailWidth={3}
                  />
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4 pt-2">
              <div className="card border-0 rounded shadow p-4">
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="align-items-center mb-0">
                    Hemoglobin{" "}
                    <span className="badge rounded-pill bg-soft-success ms-1">
                      19.5 g/dL
                    </span>
                  </h6>
                  <i className="ri-test-tube-line text-success h5"></i>
                </div>
                <div id="rchart-2" style={{ minHeight: "90px" }}>
                  <ReactApexChart
                    options={chart2.options}
                    series={chart2.series}
                    type="area"
                    height="140px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12">
          <div className="row">
            <div className="col-12 mt-4 pt-2">
              <div className="card border-0 rounded shadow p-4">
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="align-items-center mb-0">
                    Heartbeat
                    <span className="badge rounded-pill bg-soft-danger ms-1">
                      80 bpm
                    </span>
                  </h6>
                  <BsHeartFill color="#f0735a" fontSize={22} />
                </div>
                <div id="rchart-3" style={{ minHeight: "90px" }}>
                  <ReactApexChart
                    options={chart1.options}
                    series={chart1.series}
                    type="area"
                    height="140px"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 mt-4 pt-2">
              <div className="card border-0 rounded shadow">
                <div className="d-flex justify-content-between px-4 pt-4">
                  <h6 className="align-items-center mb-0">
                    Sugar levels{" "}
                    <span className="badge rounded-pill bg-soft-warning ms-1">
                      90 mg/dL
                    </span>
                  </h6>
                  <RiTimerFill fontSize={25} color="#f1b561" />
                </div>
                <div
                  id="rchart-4"
                  className="p-4 pt-4"
                  style={{ minHeight: "198.7px" }}
                >
                  <span
                    className="position-absolute"
                    style={{ marginTop: "35%", marginLeft: "35%" }}
                  >
                    90%
                  </span>
                  <Circle
                    percent={90}
                    strokeWidth={3}
                    strokeColor="#f1b561"
                    trailWidth={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2">
          <div className="card border-0 rounded shadow">
            <div className="d-flex justify-content-between align-items-center px-4 pt-4">
              <h6 className="mb-0">Doctor's Appointment</h6>

              <div className="dropdown ">
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="bg-soft-primary rounded-full rounded-circle p-2 flex"
                >
                  <RxDotsHorizontal />
                </button>

                <div className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3">
                  <button
                    className="dropdown-item text-dark"
                    onClick={() => {
                      setModalShow(true);
                      setModalheading("Book an Appointment");
                      setModalData("form");
                    }}
                  >
                    <span className="mb-0 d-inline-block me-1">
                      <i className="uil uil-book-medical align-middle h6"></i>
                    </span>
                    Add New
                  </button>
                </div>
              </div>
            </div>

            <div className="my-4 px-4">
              <form>
                <div className="mb-0" style={{ position: "relative" }}>
                  <input
                    name="date"
                    type="text"
                    className="form-control start"
                    placeholder="Select date :"
                  />
                </div>
              </form>
            </div>
            <SimpleBarReact style={{ maxHeight: 420 }}>
              {docShedule.map((x, i) => (
                <div key={i} className="px-4 pb-2">
                  <div className="d-flex justify-content-between align-items-center rounded py-1 px-3 shadow-sm">
                    <BsHeart fontSize={25} color="red" />
                    <div className="flex-1 overflow-hidden ms-2">
                      <h6 className="mb-0">Cardiogram</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Dr. Calvin Carlo
                      </p>
                    </div>
                    <span className="mb-0">10 Dec</span>
                  </div>
                </div>
              ))}
            </SimpleBarReact>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2">
          <div className="card border-0 rounded shadow">
            <div className="d-flex justify-content-between align-items-center px-4 pt-4 mb-4">
              <h6 className="mb-0">Payments</h6>
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="bg-soft-primary rounded-full rounded-circle p-2 flex"
                >
                  <RxDotsHorizontal />
                </button>
                <div className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3">
                  <Link className="dropdown-item text-dark">
                    <span className="mb-0 d-inline-block me-1">
                      <i className="uil uil-book-medical align-middle h6"></i>
                    </span>{" "}
                    Add New
                  </Link>
                  <button className="dropdown-item text-dark">
                    <span className="mb-0 d-inline-block me-1">
                      <i className="uil uil-trash align-middle h6"></i>
                    </span>{" "}
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <SimpleBarReact style={{ maxHeight: 480 }}>
              {docShedule.map((x, i) => (
                <div key={i} className="px-4 pb-2">
                  <div className="d-flex justify-content-between align-items-center rounded py-2 px-3 shadow-sm">
                    <div className="flex-1 overflow-hidden">
                      <h6 className="mb-0">Cardiogram</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Full bill paid
                      </p>
                    </div>
                    <button
                      className="btn btn-icon btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#view-invoice"
                    >
                      <TbClipboardText />
                    </button>
                  </div>
                </div>
              ))}
            </SimpleBarReact>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 mt-4 pt-2">
          <div className="card border-0 shadow rounded p-4">
            <h6 className="mb-0">Monthly Reports</h6>

            <div className="mt-4 pt-2 ">
              {Process && (
                <>
                  {Process.map((preoces, i) => {
                    return (
                      <div key={i} className="progress-box mb-3">
                        <h6 className="title text-muted fw-normal">
                          Treatment report
                        </h6>
                        <div className="progress">
                          <div
                            className="progress-bar position-relative bg-primary"
                            style={{ width: "84%" }}
                          >
                            <div className="progress-value d-block text-muted text-light">
                              84%
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-4 mt-4 pt-2">
          <h6 className="mb-0">Contact us</h6>
          <div className="row">
            <div className="col-xl-12 col-md-6 mt-4">
              <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                <div className=" badge icon flex rounded-circle mx-auto p-3">
                  <TbBrandTelegram fontSize={35} />
                </div>
                <div className="card-body p-0 mt-3">
                  <Link to="#" className="title text-dark h5 d-block">
                    New Messages
                  </Link>
                  <Link to="#" className="link">
                    Read more <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-md-6 mt-4">
              <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                <div className=" badge icon flex rounded-circle mx-auto p-3">
                  <HiOutlineEnvelope fontSize={35} />
                </div>
                <div className="card-body p-0 mt-3">
                  <Link to="#" className="title text-dark h5 d-block">
                    Latest Proposals
                  </Link>
                  <Link to="#" className="link">
                    View more <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
