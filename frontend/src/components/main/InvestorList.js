import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";

const InvestorList = () => {
  const navigate = useNavigate();

  const url = app_config.backend_url;

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const showData = () => {
    if (!loading) {
      return dataList.map((investor) => (
        <div className="col-md-4 mt-5">
          {mycard(investor._id, investor.avatar, investor.name, investor.bio)}
        </div>
      ));
    }
  };

  const mycard = (id, link, title, category) => {
    if (!link) {
      link =
        "https://media.istockphoto.com/photos/concentrated-young-african-man-in-formalwear-picture-id1194668220?k=20&m=1194668220&s=612x612&w=0&h=xO1YmVH1Mfx07HikpPubuIs4Vu4bKxMkN7q67GG2ZJg=";
    }
    return (
      <div className="card">
        <img alt="" className="card-img-top" src={link} />
        <div className="card-body">
          <h4>{title}</h4>
          <p>{category}</p>
          <button
            type="button"
            class="btn btn-primary px-3 mb-2 me-3"
            aria-controls="#picker-editor"
            onClick={(e) => navigate("/main/Displayup/" + id)}
          >
            Know More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h3 class="titlee">Investor Listing</h3>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>

      <div className="row">{showData()}</div>
    </div>
  );
};

export default InvestorList;
