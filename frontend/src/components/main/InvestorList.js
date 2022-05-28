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
              "https://www.denofgeek.com/wp-content/uploads/2022/02/doctor-strange-in-the-multiverse-of-madness.png?resize=768%2C432",
              "Dr. Strange : Multiverse of Madness",
              "Horror"
            )}
          </div>
          <div className="col-md-4">
            {mycard(
              "https://www.denofgeek.com/wp-content/uploads/2022/02/doctor-strange-in-the-multiverse-of-madness.png?resize=768%2C432",
              "Dr. Strange : Multiverse of Madness",
              "Thriller"
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default InvestorList;