import { Button, Container, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import app_config from "../../config";

const InvestorSignup = () => {
  const url = app_config.backend_url;

  // 1. create an object to initialize formik
  const userForm = {
    name: "",
    password: "",
    email: "",
    age: 0,
    avatar: "avatar_image.png",
  };

  //   2. create a callback function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1. Address
    // 2. Method
    // 3. Data
    // 4. Data format

    // to request on backend
    fetch(url + "/investor/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <section class="text-center text-lg-start">
      <div class="container py-4">
        <div class="row g-0 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div
              class="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div class="card-body p-5 shadow-5 text-center">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <Formik initialValues={userForm} onSubmit={userSubmit}>
                  {({ values, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          onChange={handleChange}
                          value={values.name}
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example2">
                          Full name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example3">
                          Email address
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          onChange={handleChange}
                          value={values.password}
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-4">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value={values.password}
                          id="password"
                          onChange={handleChange}
                          checked
                        />
                        <label class="form-check-label" for="form2Example33">
                          Subscribe to our newsletter
                        </label>
                      </div>

                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4"
                      >
                        Sign up as an Investor
                      </button>

                      <div class="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>
                      <a class="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p class="sign mb-5 pb-lg-2" style={{ color: "black" }}>
                        Already have an account?{" "}
                        <a
                          class="si"
                          href="./investorlogin"
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

          <div class="col-md-6 col-lg-5 d-none d-md-block">
            <img
              src="http://localhost:5000/images/investorbg.jpg"
              class="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSignup;
