import React from "react";
import Navbar from "./Navbar";
import car from "../images/car1.jpg";
import "./css/detail.css";
import Footer from "./Footer";

function Detail() {
  return (
    <>
      <div className="app__detail">
        <Navbar />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <p className="name">Lambogini Gallardo</p>
            <p className="price">$29.00</p>
          </div>
          <img className="img-fluid car__detail" src={car} alt="" />
          <div className="car__information mt-4">
            <h6 className="info__title">Car Information</h6>
            <div className="row">
              <div className="col-md-8">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Pieces of luggage</th>
                      <th scope="col">Doors</th>
                      <th scope="col">Passengers</th>
                      <th scope="col">Transmission</th>
                      <th scope="col">Gas vehicle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-muted">7</td>
                      <td className="text-muted">4</td>
                      <td className="text-muted">7</td>
                      <td className="text-muted">Automatic</td>
                      <td className="text-muted">Diesel</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <p className="mt-4 mb-4 gallery__title">Image Gallery</p>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src={car} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={car} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={car} alt="" />
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                  <div className="book__card">
                      <form>
                          <label htmlFor="Pickup" className="form-label text-muted">PICK UP</label>
                          <input type="date" className="form-control mb-3" />
                          <label htmlFor="Pickup" className="form-label text-muted">DROP OFF</label>
                          <input type="date" className="form-control mb-4" />
                          <div className="d-flex justify-content-between align-items-center">
                              <p className="text-muted">Price per day:</p>
                              <p className="text-muted">$30</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                              <p className="text-muted">Rental price:</p>
                              <p className="text-muted">$30</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                              <p className="text-muted">Service:</p>
                              <p className="text-muted">$0</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                              <p>RENT TOTAL:</p>
                              <p className="price">$30</p>
                          </div>
                          <button className="btn2">Proceed to book</button>
                      </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
