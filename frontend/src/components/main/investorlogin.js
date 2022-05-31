// 1. React Components are represented by Functions
// 2. Component names should start with Uppercase
// 3. There should be a top level return statement inside component
// 4. Components should be exported in order to import them anywhere.

import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const StartupLogin = ({ username, age }) => {
  const url = app_config.backend_url;

  // 1. formobject

  const loginForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  // 2. submit function

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/investor/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        });
        res.json().then((data) => {
          sessionStorage.setItem("investor", JSON.stringify(formdata));
          navigate("/investor/invprofile");
          return;
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "OOps!",
          text: "Loggedin Failed",
        });
      }

      return res.json();
    });
  };

  // 3. use Formik

  return (
    <div
      style={{
        backgroundImage: "url('http://localhost:5000/images/investorbg.jpg')",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "135vh",
        }}
      >
        <Card>
          <CardContent>
            <p className="text-center h3 mb-5 mt-5">
              Sign in as an Investor using
            </p>

            <Formik initialValues={loginForm} onSubmit={loginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <div class="container btna">
                    <button
                      type="button"
                      class="btn btn-dark btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>
                  </div>
                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <TextField
                    color="secondary"
                    label="Email"
                    type="email"
                    variant="filled"
                    className="w-100 mb-4"
                    helperText="Enter Your Email ID"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="filled"
                    className="w-100 mb-4"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label class="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!">Forgot password?</a>
                  </div>

                  <Button
                    type="submit"
                    sx={{ background: "blue" }}
                    className="mt-5 w-100"
                    variant="contained"
                  >
                    Sign in
                  </Button>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <p class="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="./investorsignup" class="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default StartupLogin;
