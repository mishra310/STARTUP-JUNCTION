import React from 'react'
import SMlogo from "./logo.svg"; 

    const myintro = (link, title, subtitle, category,category1) => {
        return (
          <div class="card">
              
            <img alt="" className="card-img-top" src={SMlogo} width = "120px" height="120px" />
            <div class="card-body">
              <h3>{title}</h3>
              <h6>{subtitle}</h6>
              <id class="para">
                  <p>" {category} "</p></id>
              <p>{category1}</p>
            </div>
          </div>
        );
      };
    
    
const About = () => {
    return (
   
 <div className="container emp-profile"> 
    <form method=""> 
        
            {myintro(
                //<img src={SMlogo} alt=" startupmuneem logo" width = "100px"/>,
                "C:\Users\sshik\OneDrive\Desktop\Startup Muneem_old\StartupMuneem\frontend\src\components\main\logo.svg",
                "StartUpMuneem",
                "Funds Yahi Milte Hai",
                "Once upon a time generating funds for a start-up was a back-breaking task",
                "To prove this quote wrong we introduce you to StartupMuneem, a project that is designed with an idea to generate funds for start-ups by serving as a medium of communication between Start-ups and Investors."
            )} 
    </form>
 </div>
       
);
};
export default About;