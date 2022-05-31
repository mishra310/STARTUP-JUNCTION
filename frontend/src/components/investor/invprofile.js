import { Card, CardContent, TextField } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import app_config from "../../config";

const InvProfile = (props) => {
  const [updateForm, setUpdateForm] = useState({});
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("investor"))
  );
  const [selImage, setSelImage] = useState("");
  const url = app_config.backend_url;

  useEffect(() => {
    // fetch(url + "/user/getbyid/" + currentUser._id)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUpdateForm(data);
    //   });
    console.log(currentUser);
  }, []);

  const onFormSubmit = (value, { setSubmitting }) => {
    fetch(url + "/investor/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setCurrentUser(data);
          sessionStorage.setItem("investor", JSON.stringify(data));
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welldone!",
        text: "You have successfully Updated",
      });
    });
  };

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        fetch(url + "/investor/update/" + currentUser._id, {
          method: "PUT",
          body: JSON.stringify({ avatar: file.name }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            res.json().then((data) => {
              console.log(data);
              setCurrentUser(data);
              sessionStorage.setItem("investor", JSON.stringify(data));
            });
          }
          Swal.fire({
            icon: "success",
            title: "Welldone!",
            text: "You have successfully Updated",
          });
        });
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  return (
    <div className="col-md-10 mx-auto">
      <Card>
        <CardContent>
          <div className="row">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="text-right"> Manage Your Profile</h2>
            </div>
            <div className="col-md-4">
              <img
                src={
                  url +
                  "/uploads/" +
                  (currentUser.avatar ? currentUser.avatar : "avatar_image.png")
                }
                className="img-fluid"
                alt=""
              />
              <br />
              <label className="mt-3">Change Image</label>
              <input
                className="form-control"
                type="file"
                onChange={uploadThumbnail}
              />
            </div>
            <div className="col-md-8">
              <Formik
                enableReinitialize={true}
                initialValues={currentUser}
                onSubmit={onFormSubmit}
              >
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="mt-4 w-100"
                      label="Full Name"
                      variant="filled"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                    />
                    <TextField
                      className="mt-4 w-100"
                      label="Email"
                      variant="filled"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <TextField
                      className="mt-4 w-100"
                      label="Description"
                      variant="filled"
                      name="description"
                      onChange={handleChange}
                      value={values.description}
                    />
                    <TextField
                      className="mt-4 w-100"
                      label="Age"
                      variant="filled"
                      
                      name="age"
                      onChange={handleChange}
                      value={values.age}
                    />
                    <TextField
                      className="mt-4 w-100"
                      label="Mobile Number"
                      variant="filled"
                      name="contact"
                      onChange={handleChange}
                      value={values.contact}
                    />
                    <TextField
                      className="mt-4 w-100"
                      label="Avatar"
                      variant="filled"
                      name="avatar"
                      onChange={handleChange}
                      value={values.avatar}
                    />
                    <TextField
                      className="mt-4 w-100"
                      label="Social Media Handle"
                      variant="filled"
                      name="social media handle"
                      onChange={handleChange}
                      value={values.socialmedia}
                    />
                    <div className="text-center">
                      <button className="btn btn-primary mt-5 w-100">
                        Save Chnages
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvProfile;
