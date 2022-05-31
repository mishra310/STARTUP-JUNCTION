import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";

const StartupList = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const [keyword, setKeyword] = useState("");

  const filters = ["Sort by Newest"];

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
  const [selFilter, setSelFilter] = useState("");

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
          <div key={_id} class="card float-right mt-5">
            <div class="row">
              <div class="col-sm-5 mt-5">
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
                  <p class="tag"></p>
                  <p>{description}</p>
                  <br />
                  <button
                      type="button"
                      class="btn btn-warning px-3 mb-2 me-3"
                      aria-controls="#picker-editor"
                      onClick={(e) => navigate("./main/Displayup")}
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
    fetch(url + "/user/getall")
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
    fetch(url + "/user/getall")
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

  const applySearch = () => {};

  const searchCard = () => {
    return (
      <div className="pt-5">
        <div className="card ">
          <div className="card-header bg-white p-4">
            <div class="input-group rounded">
              <input
                style={{ border: "none", outline: "none" }}
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <span
                class="input-group-text border-0 bg-white"
                id="search-addon"
                onClick={applySearch}
              >
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="card-body p-4">
            <p className="text-muted">ADVANCED SEARCH</p>
            <div className="row">
              <div className="col-sm-3">
                {filters.map((name) => {
                  return (
                    <>
                      <button
                        onClick={(e) => setSelFilter(name)}
                        className={
                          "btn btn-" +
                          (name === selFilter ? "" : "outline-") +
                          "primary"
                        }
                      >
                        {name}
                      </button>
                      &nbsp; &nbsp;
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  function compare(a, b) {
    if (a.last_nom < b.last_nom) {
      return -1;
    }
    if (a.last_nom > b.last_nom) {
      return 1;
    }
    return 0;
  }

  return (
    <div className="container">
      <h3 class="titlee">Start-Up Listing</h3>
      <hr />
      {searchCard()}
      <div className="mt-5">{displayData()}</div>
    </div>
  );
};

export default StartupList;
