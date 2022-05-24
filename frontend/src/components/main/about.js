import React from 'react'
 

    const myintro = (link, title, subtitle, category,category1,category2) => {
        return (
          <div class="container">
              
            <img alt="" className="card-img-top" src={"http://localhost:5000/images/logo.svg"} width = "120px" height="120px" />
            <div class="card-body">
              <h3 class="title-ans">{title}</h3>
              <h6 class="paraa">{subtitle}</h6>
              <id class="para">
                  <p>" {category} "</p></id>
              <div class="paraa"><p>{category1}</p>
              <p>{category2}</p>
            </div>
            </div>
          </div>
        );
      };
    
    
const About = () => {
    return (
   
 <div className="container emp-profile"> 
     
        <h3 class="titleee">About Us |</h3>
            {myintro(
                <img src={"http://localhost:5000/images/logo.svg"} alt=" startupmuneem logo" width = "100px"/>,
                "StartUpMuneem",
                "Funds Yahi Milte Hai",
                "Once upon a time generating funds for a start-up was a back-breaking task",
                "To prove this quote wrong we introduce you to StartupMuneem, a project that is designed with an idea to generate funds for start-ups by serving as a medium of communication between Start-ups and Investors.",
                "StartupMuneem is a project that is designed with an idea to generate funds for start-ups by serving as a medium of communication between Start-ups and Investors"
            )} 
    
 </div>
       
);
};
export default About;