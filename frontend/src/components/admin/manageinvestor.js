import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { ExpandMore } from "@mui/icons-material";
import toast from "react-hot-toast";

const ManageInvestor = () => {
  const url = app_config.backend_url;

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/user/getall").then((res) => {
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

    fetch(url + "/user/delete/" + id, {
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
    // setShowUpdateForm(true);
    // // update the userFormData
    // setUpdateFormData(userdata);
  };

  const showUsers = () => {
    if (!loading) {
      return dataList.map((data) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            {data.username}
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
        {showUsers()}
      </div>
    </div>
  );
};

export default ManageInvestor;
