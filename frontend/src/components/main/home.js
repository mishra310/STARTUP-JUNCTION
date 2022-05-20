import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

const Home = () => {
  //<button className="btn btn-danger">Bootstrap</button>  
  const getSum = (a, b) => {
      return a + b;
    };
    const navigate = useNavigate();

    const mycard = (link, category) => {
      return (
        <div class="card bg-white text-white" >
          <img alt="partners" class="card-img"  src={link} />
          <div class="card-img">
           <p> {category}</p>
           <button
                      type="button"
                      class="btn btn-warning px-3 mb-2 me-3"
                      aria-controls="#picker-editor"
                      onClick={e => navigate('./StartupSignup')}
                    >
                      View More
                    </button>
          </div>
        </div>
      );
    };
  
    return (
      <div className="card">
        <div className="card-body">
            {mycard(
              "http://localhost:5000/images/temp1.jpg",
              ""
            )}
          
          
        </div>
      </div>
      
      
    );
  };
  
  export default Home;