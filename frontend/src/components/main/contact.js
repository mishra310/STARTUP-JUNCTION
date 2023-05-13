import { Button } from "@mui/material";
import React from 'react'
const Contact = ({ username }) => {
    return (
        <div>
         
         <div class="jumbotron text-center">
        <h1>Contact Us</h1>
            <p>Oops! did we do something wrong?
                Don't worry we have all ears on you </p>
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
        //<button className="btn btn-danger">Boost</button>
        
    );
  };

export default Contact;