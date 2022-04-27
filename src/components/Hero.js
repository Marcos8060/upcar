import React from "react";
import "./css/hero.css";
import car from "../images/range.webp";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="app__hero">
        <Navbar />
        <div class="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h2 className="intro">
                Hire the best cars in town at friendly prices.
              </h2>
              <p class="text">We have patnered with the world’s leading manufacture’s and brands to create a cross border experience without having to sacrifice the comfort of city rides.</p>
            </div>
            <div className="col-md-8">
              <img className="img-fluid" src={car} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
