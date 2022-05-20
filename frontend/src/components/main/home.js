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
        <div class="jumbotron text-center">
        <h1>Subscribe Now!</h1>
            <p> Subscribe to get our daily news and promotions</p>
        <form class="form-inline">
          <div class="input-group">
           <input type="email" class="form-control" size="50" placeholder="Email Address" required/>
       <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Subscribe</button>
       </div>
       </div>
       </form>
       </div>

      </div>
      
      
    );
  };
  
  export default Home;