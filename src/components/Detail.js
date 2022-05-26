import React from "react";
import Navbar from "./Navbar";
import car from "../images/car1.jpg";
import "./css/detail.css";
import Footer from "./Footer";
import GradeIcon from "@material-ui/icons/Grade";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ClearIcon from "@material-ui/icons/Clear";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
            {/* <h6 className="info__title">Car Information</h6> */}

            {/* navbar */}
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  Car Information
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <ShoppingCartIcon className='cartIcon' />
                        <span className="count">0</span>
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* End of navbar */}
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
                    <img className="img-fluid mt-3 mb-3" src={car} alt="" />
                  </div>
                  <div className="col-md-4">
                    <img className="img-fluid mt-3 mb-3" src={car} alt="" />
                  </div>
                  <div className="col-md-4">
                    <img className="img-fluid mt-3 mb-3" src={car} alt="" />
                  </div>
                </div>
                <div className="row choose">
                  <div className="col-md-6">
                    <CreditCardIcon />
                    <span>No prepayment required</span>
                    <p className="desc">
                      Just provide us your Social Security Number and It’s all
                      done
                    </p>
                  </div>
                  <div className="col-md-6">
                    <GradeIcon />
                    <span>High quality cars</span>
                    <p className="desc">
                      We’re available for helping you, including holiday
                    </p>
                  </div>
                  <div className="col-md-6">
                    <FavoriteBorderIcon />
                    <span>Trustedby 10+ clients</span>
                    <p className="desc">
                      We have 10k+ happy clients who love us and ready for our
                      cars
                    </p>
                  </div>
                  <div className="col-md-6">
                    <ClearIcon />
                    <span>Free cancelation</span>
                    <p className="desc">
                      No extra fee, you can cancel your booking anytime
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="book__card">
                  <form>
                    <label htmlFor="Pickup" className="form-label text-muted">
                      PICK UP
                    </label>
                    <input type="date" className="form-control mb-3" />
                    <label htmlFor="Pickup" className="form-label text-muted">
                      DROP OFF
                    </label>
                    <input type="date" className="form-control mb-4" />
                    <select
                      className="form-select form-select-sm mb-4"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Select Quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                    </select>
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
                    <button className="btn2">Add to cart</button>
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
