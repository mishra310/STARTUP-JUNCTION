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
                  <h3 class="">{name}</h3>
                  <p class="tag">The Legacy Continues</p>
                  <p>{description}</p>
                  <br />
                  <button
                      type="button"
                      class="btn btn-warning px-3 mb-2 me-3"
                      aria-controls="#picker-editor"
                      onClick={(e) => navigate("./main/StartupList")}
                    >
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
      <nav class="navbar navbar-expand-lg navbar-light ">
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
      </form>
</nav>
      <div className="container">{displayData()}</div>
    </div>
  );
};

export default StartupList;
