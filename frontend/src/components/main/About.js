import React from 'react'
import SMlogo from "../image/logo.svg"; 

const About = () => {
return (
<div className="container emp-profile"> 
    <form method=""> 
        <div className="row"> 
            <div className="col-md-4"> 
                <img src={SMlogo} alt="thapa" width = "100px"/>
            </div>
            
            <div className="col-md-4"> 
            <div className="profile-head">
                <h5>StartupMuneem</h5>
                <h6>A Medium Between Startup And Investor</h6>
                <p className="profile-rating mt-3 mb-5">StartupMuneem <span></span></p>
            </div>
                
            </div>

        </div>
    </form>
</div>
);
};
export default About;