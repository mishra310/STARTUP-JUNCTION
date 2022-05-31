import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const InvestorList = () => {
  const navigate = useNavigate();

  const mycard = (link, title, category) => {
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
            onClick={(e) => navigate("/main/displayup/")}
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

      <div className="row">
        <div className="col-md-4">
          {mycard(
            "http://localhost:5000/images/ShikharPaan.jpg",
            "Shikhar Srivastava",
            " bio"
          )}
        </div>
        <div className="col-md-4">
          {mycard(
            "http://localhost:5000/images/Pra.jpg",
            "Prakarsh Tarun",
            "bio"
          )}
        </div>
        <div className="col-md-4">
          {mycard(
            "http://localhost:5000/images/LakhanPahad.jpg",
            "Lakhan Singh",
            "bio"
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorList;
