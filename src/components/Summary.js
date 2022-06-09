import React from "react";
import { CgProfile } from "react-icons/cg";
import "./css/summary.css";
import { GlobalContext } from "../context";
import car from "../images/posh.jpg";

function Summary() {
  const {
    state: { cart },
  } = GlobalContext();
  return (
    <div className="container app__summary">
      <div className="card">
        <div className="row">
          <div className="col-md-3 text-center leftSummary">
            <CgProfile />
            <br />
            Username :  Marcos
            <hr />
            Number of Items : 2
          </div>
          <div className="col-md-6 centerSummary">
            <h3>Dashboard</h3>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div>
                  <img className="img-fluid summaryImg" src={car} alt="" />
                </div>
                <div className="d-flex flex-column m-3">
                  <p>Brand: Mercedes</p>
                  <p>Price: $ 40</p>
                  <p>Quantity: 4</p>
                </div>
              </div>
              <div>
                <p>Pickup Date : Today</p>
                <p>DropOff Date : Today</p>
                <p>Location : Nairobi</p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div>
                  <img className="img-fluid summaryImg" src={car} alt="" />
                </div>
                <div className="d-flex flex-column m-3">
                  <p>Brand: Mercedes</p>
                  <p>Price: $ 40</p>
                  <p>Quantity: 4</p>
                </div>
              </div>
              <div>
                <p>Pickup Date : Today</p>
                <p>DropOff Date : Today</p>
                <p>Location : Nairobi</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-3">
              <h4>Personal Information</h4>
              <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
