import React from "react";
import "./css/hero.css";
import car from "../images/posh.jpg";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div className="app__hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h2 className="intro">
                Now it's easy for you to rent a car
              </h2>
              <p className="text">We have patnered with the world’s leading manufacture’s and brands to create a cross border experience without having to sacrifice the comfort of city rides.</p>
              <Link to='/fleet' className="btn book1 mb-4">Start Booking</Link>
            </div>
            <div className="col-md-8">
              <img className="img-fluid car1" src={car} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
