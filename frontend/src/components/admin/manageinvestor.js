import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { ExpandMore } from "@mui/icons-material";
import toast from "react-hot-toast";
import UpdateInvestor from "./UpdateInvestor";

const ManageInvestor = () => {
  const url = app_config.backend_url;

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const fetchData = () => {
    fetch(url + "/investor/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setLoading(false);
          setDataList(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = (id) => {
    console.log(id);

    fetch(url + "/investor/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        toast("Item Deleted!!", {
          icon: "💀",
        });
        fetchData();
      }
    });
  };

  const updateUser = (userdata) => {
    // change the value of showUpdateForm to true
    setShowUpdateForm(true);
    // update the userFormData
    setUpdateFormData(userdata);
  };

  const showUsers = () => {
    if (!loading) {
      return dataList.map((data) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            {data.name}
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-muted">Email</p>
            <h3>{data.email}</h3>
            <button
              className="btn btn-danger"
              onClick={(e) => deleteUser(data._id)}
            >
              <i class="fas fa-trash"></i> Delete
            </button>
            &nbsp;
            <button
              className="btn btn-primary"
              onClick={(e) => updateUser(data)}
            >
              <i class="fas fa-pen"></i> Edit
            </button>
          </AccordionDetails>
        </Accordion>
      ));
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Manage investor</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">{showUsers()}</div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                {showUpdateForm ? (
                  <UpdateInvestor
                    userForm={updateFormData}
                    loadDataFromBackend={fetchData}
                    showForm={setShowUpdateForm}
                  ></UpdateInvestor>
                ) : (
                  <h3 className="text-muted">Select User to Update</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInvestor;
