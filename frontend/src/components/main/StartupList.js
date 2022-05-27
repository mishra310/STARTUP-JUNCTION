import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";

const StartupList = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/user/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading) {
      return datalist.map(
        ({
          username,
          name,
          email,
          contact,
          description,
          brochure,
          avatar,
          Startedon,
          AmountNeeded,
          Reason,
          socialMediaHandle,
          website,
          createdAt,
          _id,
        }) => (
          <div key={_id} class="card float-right">
            <div class="row">
              <div class="col-sm-5">
                <img
                  class="d-block"
                  width="550px"
                  height="300px"
                  src={url + "/uploads/" + avatar}
                  alt=""
                ></img>
              </div>

              <div class="col-sm-7">
                <div class="lis">
                  <h4 class="title">{name}</h4>
                  <p class="tag">The Legacy Continues</p>
                  <p>{description}</p>
                  <br />
                  <button class="btn btn-warning btn-sm float-right">
                    Read More to Invest
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }
  };

  const applyfilter = () => {
    fetch(url + "/slide/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ title }) => {
          return title.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setDatalist(filtered);
        setLoading(false);
      });
  };

  const applyCategoryfilter = (cate) => {
    fetch(url + "/slide/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ category }) => {
          return category.toLowerCase().includes(cate.toLowerCase());
        });
        console.log(filtered);
        setDatalist(filtered);
        setLoading(false);
      });
  };

  return (
    <div classname="container">
      <h3 class="titlee">Start-Up Listing</h3>
      <div className="container">{displayData()}</div>
    </div>
  );
};

export default StartupList;
