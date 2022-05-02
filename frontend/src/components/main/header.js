import {Button} from "@mui/material";
import { NavLink } from "react-router-dom";
import SMlogo from "../image/logo.svg"; 

const Header = ({darkTheme, setDarkTheme}) => {
 return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
             <ul className="navbar-nav">
            <NavLink to="/home" className="nav-link">
             <img src={SMlogo} alt="logo"  width = "80px" height="80px"/><h3>StartUpMuneem</h3>
             </NavLink>           
             </ul>
        </div>
             <div className=".container" >
             <ul className="navbar-nav">
             
             
         <li className="nav-item ">
            <NavLink to="/home" className="nav-link">
              <h5 className="text-right bg-white text">Home</h5>
                        
             </NavLink>
             </li>
             
         <li className="nav-item">
            <NavLink to="/About" className="nav-link">
             <h5 className="text-right bg-white text"> About Us</h5>     
             </NavLink>
             </li>
             
         <li className="nav-item ">
            <NavLink to="/Contact" className="nav-link">
             <h5 className="text-right bg-white text">Contact Us</h5>
             </NavLink>
             </li>

             <li className="nav-item-lg ">
             <Button variant="outlined" href="/Startupsignup" >Register as a Start-up</Button>
             </li>
            
              <li className="nav-item ">
             <Button href="/Investorupsignup" variant="contained"  >Register as an Investor</Button>
             
             </li>

     </ul>
        </div>
     </nav>  
);
};

export default Header;