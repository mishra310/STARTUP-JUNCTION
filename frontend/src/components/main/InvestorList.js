import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const InvestorList = () => {
    const navigate = useNavigate();
  
    const mycard = (link, title, category) => {
      return (
        <div className="card">
          <img alt="" className="card-img-top" src={link}  />
          <div className="card-body">
            <h4>{title}</h4>
            <p>{category}</p>
           <button
                      type="button"
                      class="btn btn-primary px-3 mb-2 me-3"
                      aria-controls="#picker-editor"
                      onClick={(e) => navigate("./StartupSignup")}
                    >
                      Know More
                    </button>
                    
          </div>
        </div>
      );
    };
  
    return (
      <div className="container">
        
        
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