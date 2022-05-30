import React from 'react'

const Displayup = () => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" width="150px" src="http://localhost:5000/images/logo.svg"></img>
                <span className="font-weight-bold">Date of inaugration</span>
                
                </div>
                </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile</h4>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label class="labels">Full Name :</label></div>    
                    <div className="col-md-12"><label class="labels">Email ID :</label></div>
                    <div className="col-md-12"><label class="labels">Discription :</label></div>
                    <div className="col-md-12"><label class="labels">Mobile Number :</label></div>
                    <div className="col-md-12"><label class="labels">Brouchre :</label></div>
                    <div className="col-md-12"><label class="labels">Amount Needed :</label></div>
                    <div className="col-md-12"><label class="labels">Reason :</label></div>
                    <div className="col-md-12"><label class="labels">Social Media Handle :</label></div>
                    <div className="col-md-12"><label class="labels">Webiste :</label></div>
                    <div className="col-md-12"><label class="labels">Address</label></div>
                    <div className="col-md-12"><label class="labels">State/Region</label></div>
                </div>
                <div className="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile For Later</button></div>
            </div>
        </div>
        
    </div>
</div>
  );
};

export default Displayup;