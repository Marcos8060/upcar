import React from "react";
import { CgProfile } from "react-icons/cg";
import "./css/summary.css";
import { GlobalContext } from "../context";
import car from "../images/posh.jpg";
import { Link } from "react-router-dom";

function Summary() {
  const { cart, finalData } = GlobalContext();
  return (
    <div className="container app__summary">
      <div className="card">
        <div className="row">
          <div className="col-md-3 leftSummary">
            <h3>Dashboard</h3>
            <br />
            <p>Username : Marcos</p>
            {finalData.map((data) => (
              <>
                <p>First Name : {data.firstname}</p>
                <p>Last Name : {data.lastname}</p>
                <hr />
                <p>Email : {data.email}</p>
                <p>Address : {data.code}</p>
                <p>County : {data.city}</p>
                <p>Pickup Date : {data.pickup}</p>
                <p>DropOff Date: {data.dropoff}</p>
                <hr />
                <small>
                  Instructions: {data.instructions}
                </small>
              </>
            ))}
            <hr />
            <Link to="/payment" className=" btn payment">
              Proceed to Payment
            </Link>
          </div>
          <div className="col-md-9 centerSummary">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img className="img-fluid summaryImg" src={car} alt="" />
                  </div>
                  <div className="col-md-6 text-center">
                    <p>Brand: Mercedes</p>
                    <p>Price: $ 40</p>
                    <p>Quantity: 4</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <p>Luggage : 4</p>
                <p>Doors : 4</p>
                <p>Passengers : 4</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img className="img-fluid summaryImg" src={car} alt="" />
                  </div>
                  <div className="col-md-6 text-center">
                    <p>Brand: Mercedes</p>
                    <p>Price: $ 40</p>
                    <p>Quantity: 4</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <p>Luggage : 4</p>
                <p>Doors : 4</p>
                <p>Passengers : 4</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-around align-items-center">
              <h4>Total</h4>
              <h4>$ 3000</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
