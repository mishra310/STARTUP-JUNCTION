import { Button, Container, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const StartupSignup = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();
  // 1. create an object to initialize formik
  const userForm = {
    username: "",
    password: "",
    email: "",
    age: 0,
  };

  const generateOTP = () => {
    let otp = parseInt(Math.random().toFixed(4).substr(`-${4}`));
    // setOTP(otp);
    return otp;
  };

  //   2. create a callback function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1. Address
    // 2. Method
    // 3. Data
    // 4. Data format

    // to request on backend
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Startup Registered",
        });
        fetch(url + "/util/sendmail", {
          method: "POST",
          body: JSON.stringify({
            to: formdata.email,
            subject: "Startup Muneem Verification",
            text: "Your Verification Code is " + generateOTP(),
          }),
        }).then((res) => {
          console.log(res.status);
        });
        navigate("/main/startuplogin");
      });
    //
  };

  const uploadFile = (e) => {
    // extracting file from input
    const file = e.target.files[0];

    // create formdata
    const fd = new FormData();
    fd.append("file", file);

    // request for uploading file
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status);
    });
  };

  //   3. add formik in jsx
  return (
    <section class="vh-200" style={{ backgroundColor: "#ffb84d" }}>
      <div class="lof">
        <div class="container py-5 h-200">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="http://localhost:5000/images/startupbg.jpg"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                      width="1800px"
                      height="180px"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <Formik initialValues={userForm} onSubmit={userSubmit}>
                        {({ values, handleSubmit, handleChange }) => (
                          <form onSubmit={handleSubmit}>
                            <div class="d-flex align-items-center mb-3 pb-1">
                              <img
                                src="http://localhost:5000/images/logo.svg"
                                alt="logo"
                                width="60px"
                                height="60px"
                              />
                              <span class="h1 fw-bold mb-0">
                                STARTUP MUNEEM
                              </span>
                            </div>

                            <h5
                              class="fw-normal mb-3 pb-3"
                              style={{ letterSpacing: "1px" }}
                            >
                              Create your account for registering your start-up
                            </h5>

                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                                class="form-control form-control-lg"
                              />
                              <label class="form-label" for="form2Example17">
                                Full Name
                              </label>
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                class="form-control form-control-lg"
                              />
                              <label class="form-label" for="form2Example17">
                                Email Address
                              </label>
                            </div>

                            <div class="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                class="form-control form-control-lg"
                              />
                              <label class="form-label" for="form2Example27">
                                Password
                              </label>
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="contact"
                                id="contact"
                                value={values.contact}
                                onChange={handleChange}
                                class="form-control form-control-lg"
                              />
                              <label class="form-label" for="form2Example27">
                                Mobile Number
                              </label>
                            </div>

                            <div class="pt-1 mb-4">
                              <button
                                class="btn btn-dark btn-lg btn-block"
                                type="submit"
                              >
                                Sign Up as a Start-up
                              </button>
                            </div>

                            <a class="small text-muted" href="#!">
                              Forgot password?
                            </a>
                            <p
                              class="sign mb-5 pb-lg-2"
                              style={{ color: "black" }}
                            >
                              Already have an account?{" "}
                              <a
                                class="si"
                                href="./startuplogin"
                                style={{ color: "blue" }}
                              >
                                Sign in here
                              </a>
                            </p>
                            <a href="#!" class="small text-muted">
                              Terms of use.
                            </a>
                            <a href="#!" class="small text-muted">
                              Privacy policy
                            </a>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSignup;
