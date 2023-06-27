import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CenteredModal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../components/loading/loadingSlice";
import { baseUrl } from "../../configuration";

const SignUp = () => {
  const data = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    usertype: "user",
  };
  const signupdetail = useSelector((state) => state.Signup);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState();
  const [Modalheading, setModalheading] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpData, setSignUpData] = useState(data);

  const handleSignup = async () => {
    dispatch(setLoading(true));
    try {
      const data = await axios.post(
        `${baseUrl}/user/register`,
        signUpData
      );
      if (data.data === "exists") {
        toast.error("You are already register with us ");
        dispatch(setLoading(false));
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (data.data === "created") {
        if (signUpData.usertype === "user") {
          toast.success("You are Sucessfully register with us ");
          dispatch(setLoading(false));
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          handleUserTypeData();
          dispatch(setLoading(false));
        }
      } else {
        toast.error(data.data);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleUserTypeData = async () => {
    const email = { email: signUpData.email };
    const doctorval = { ...signupdetail.doctorDetail, ...email };
    const patientval = { ...signupdetail.patientDetail, ...email };
    switch (signUpData.usertype) {
      case "doctor-pending":
        if (signupdetail.doctorDetail !== {}) {
          try {
            await axios.post(
              `${baseUrl}/doctor/registerdoctor`,
              doctorval
            );
            toast.success("You are sucessfully registered as doctor");
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          } catch (error) {
            toast.error(error.message);
          }
        }
        break;
      case "patient-pending":
        if (signupdetail.patientDetail !== {}) {
          try {
            await axios.post(
              `${baseUrl}/patient/registerpatient`,
              patientval
            );
            toast.success("You are sucessfully registered as Patient");
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          } catch (error) {
            toast.error(error.message);
          }
        }
        break;

      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
    // handleUserTypeData();
  };
  console.log();
  const handleUserType = (e) => {
    e.preventDefault();
    const option = e.target.value;
    switch (option) {
      case "doctor":
        setSignUpData({ ...signUpData, usertype: "doctor-pending" });
        setModalShow(true);
        setModalheading("Fill this form to continue as doctor");
        setModalData("doctor-form");
        break;
      case "patient":
        setSignUpData({ ...signUpData, usertype: "patient-pending" });
        setModalShow(true);
        setModalheading("Fill this form to continue as Patient");
        setModalData("patient-form");
        break;
      default:
        setSignUpData({ ...signUpData, usertype: "user" });
        break;
    }
  };

  return (
    <section className="bg-half-150 d-table w-100 bg-light py-5">
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalData}
        heading={Modalheading}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <img
              src="../assets/images/logo-dark.png"
              height="22"
              className="mx-auto d-block"
              alt=""
            />
            <div className="card login-page shadow mt-4 rounded border-0">
              <div className="card-body">
                <h4 className="text-center">Sign Up</h4>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="login-form mt-4"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          First name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              firstname: e.target.value,
                            });
                          }}
                          value={signUpData.firstname}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Last name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              lastname: e.target.value,
                            });
                          }}
                          value={signUpData.lastname}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              email: e.target.value,
                            });
                          }}
                          value={signUpData?.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Mobile Number{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              mobile: e.target.value,
                            });
                          }}
                          value={signUpData.mobile}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              password: e.target.value,
                            });
                          }}
                          value={signUpData.password}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="">
                          <label className="form-label">
                            Tell about yourself
                          </label>
                          <select
                            className="form-select"
                            aria-label="select-user-type"
                            onChange={(e) => handleUserType(e)}
                          >
                            <option value="user"> General</option>
                            <option value="patient"> Patient</option>
                            <option value="doctor"> Doctor</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input align-middle"
                            type="checkbox"
                            value=""
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="accept-tnc-check"
                          >
                            I Accept{" "}
                            <Link to={"/"} className="text-primary">
                              Terms And Condition
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-grid">
                        <button className="btn btn-primary">SignUp</button>
                      </div>
                    </div>

                    <div className="mx-auto">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Already have an account ?
                        </small>{" "}
                        <Link to={"/login"} className="text-dark fw-bold">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
