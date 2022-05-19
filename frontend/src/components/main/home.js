import { Button } from "@mui/material";
const Home = ({ username }) => {
  //<button className="btn btn-danger">Bootstrap</button>  
  const getSum = (a, b) => {
      return a + b;
    };
  
    const mycard = (link, title, category) => {
      return (
        <div className="card">
          <img alt="" className="card-img-top" src={link} />
          <div className="card-body">
            <h4>{title}</h4>
            <p> {category}</p>

          <Button color="secondary" className="mt-5" variant="contained">View More</Button>

          </div>
        </div>
      );
    };
  
    return (
      <div className="container">
        <h3 className="text-center bg-dark text-white">
          Current User : {username}
        </h3>
        <h1>Startup Muneem</h1>
        <h2></h2>
        
  
        <div className="row">
          <div className="col-md-4">
            {mycard(
              "http://localhost:5000/images/cover.jpg",
              "Startup Muneem",
              ""
            )}
          </div>
          <div className="col-md-4">
            {mycard(
              "http://localhost:5000/images/logo.svg",
              "Startup's",
              ""
            )}
          </div>
          <div className="col-md-4">
            {mycard(
              "http://localhost:5000/images/logo.svg",
              "Investor's",
              ""
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;