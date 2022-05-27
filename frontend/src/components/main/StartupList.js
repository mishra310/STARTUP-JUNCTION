import React from 'react'

const StartupList = () => {
  return (
      <div classname="container">
          <h3 class="titlee">Start-Up Listing</h3>
   <div class="card float-right">  
    <div class="row">
      <div class="col-sm-5">  
        <img class="d-block" width="550px\" height="300px" src="http://localhost:5000/images/logo design.png" alt="">
      </img></div>
      
      <div class="col-sm-7">
        <div class="lis">
                  <h4 class="title">ImamDasta | HomeMade Spices</h4>
          <p class="tag">The Legacy Continues</p>
          <p>A brand which focus on providing gourment spices prepared using traditional ways like #Sun-Drying, #Hand-pounding and #Hand-sieving</p>
          <br/>
          <a href="#" class="btn btn-warning btn-sm float-right">Read More to Invest</a>
        </div>
      </div>
      </div>
      
    </div>
    <div class="card1 float-left">  
    <div class="row">
      <div class="col-sm-1">  
        <img class="d-block1" width="550px" height="300px" src="http://localhost:5000/images/logo design.png" alt="">
      </img>
      </div>
      
      <div class="col-sm-7">
        <div class="lis">
                  <h4 class="title">ImamDasta | HomeMade Spices</h4>
          <p class="tag">The Legacy Continues</p>
          <p>A brand which focus on providing gourment spices prepared using traditional ways like #Sun-Drying, #Hand-pounding and #Hand-sieving</p>
          <br/>
          <a href="#" class="btn btn-warning btn-sm float-right">Read More to Invest</a>
        </div>
      </div>
      </div>
      
    </div>
  </div>
  

  )
}

export default StartupList;