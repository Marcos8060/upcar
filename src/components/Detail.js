import React, { useState, useEffect } from "react";
import car from "../images/car1.jpg";
import "./css/detail.css";
import Footer from "./Footer";
import GradeIcon from "@material-ui/icons/Grade";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ClearIcon from "@material-ui/icons/Clear";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context";

function Detail() {
  const {
    state: { cart },
    dispatch,
  } = GlobalContext();
  console.log(cart);
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const url = `http://127.0.0.1:8000/api/featured/${id}/`;
  const [data, setData] = useState([]);
  const [pickup, setPickup] = useState({
    pickup: "",
    dropoff: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPickup({ ...pickup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup.pickup && pickup.dropoff) {
      const newData = { ...pickup, id: new Date().getTime().toString() };
      setData([...data, newData]);
      setPickup({ pickup: "", dropoff: "" });
    }
  };
  console.log(data);

  useEffect(() => {
    axios.get(url).then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <>
      <div className="app__detail">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <p className="name">{item.name}</p>
            <p className="price">$ {item.price}</p>
          </div>
          <img className="img-fluid car__detail" src={item.image} alt="" />
          <div className="d-flex align-items-center top">
            <h6 className="info__title">Car Information</h6>
            <div class="dropdown">
              <a
                className="btn dropdown-toggle viewCartBtn"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                View Cart({cart.length})
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {cart.map((car) => (
                  <>
                    <div className="d-flex justify-content-between">
                      <div>
                        <img
                          className="img-fluid cartImg"
                          src={car.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <small className="fw-bold">{car.name}</small>
                        <br />
                        <span className="cartPrice">$ {car.price}</span>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
                <div className="d-flex justify-content-between align-items-center">
                    <span>Total</span>
                    <span>$ 800</span>
                </div>
                <hr />
                <Link to="/cart" className="visitCartBtn btn">Go to Cart</Link>
              </ul>
            </div>
          </div>
          {/* <nav class="navbar navbar-expand-lg">
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
                        <ShoppingCartIcon className="cartIcon" />
                        <span className="count">0</span>
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              className="img-fluid cartImg"
                              src={car}
                              alt=""
                            />
                          </div>
                          <div>
                            <small className="fw-bold">
                              Lamborgini Gallardo
                            </small>
                            <br />
                            <span className="cartPrice">$ 400</span>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              className="img-fluid cartImg"
                              src={car}
                              alt=""
                            />
                          </div>
                          <div>
                            <small className="fw-bold">
                              Lamborgini Gallardo
                            </small>
                            <br />
                            <span className="cartPrice">$ 400</span>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              className="img-fluid cartImg"
                              src={car}
                              alt=""
                            />
                          </div>
                          <div>
                            <small>Lamborgini Gallardo</small>
                            <br />
                            <span className="cartPrice">$ 400</span>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-around align-items-center">
                          <span>Total</span>
                          <span>$ 800</span>
                        </div>
                        <hr />
                        <Link to="/cart" className="visitCartBtn btn">
                          View Cart
                        </Link>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> */}
          {/* End of navbar */}
          <div className="row">
            <div className="col-md-8">
              <div className="table-responsive">
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
                      <td className="text-muted">{item.luggage}</td>
                      <td className="text-muted">{item.doors}</td>
                      <td className="text-muted">{item.passengers}</td>
                      <td className="text-muted">{item.transmission}</td>
                      <td className="text-muted">{item.gas}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <p className="mt-4 mb-4 gallery__title">Interior Images</p>
              <div className="row">
                <div className="col-md-4">
                  <img
                    className="img-fluid interior mt-3 mb-3"
                    src={item.interior1}
                    alt=""
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="img-fluid interior mt-3 mb-3"
                    src={item.interior2}
                    alt=""
                  />
                </div>
                <div className="col-md-4">
                  <img
                    className="img-fluid interior mt-3 mb-3"
                    src={item.interior3}
                    alt=""
                  />
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
              {cart.some((p) => p.id === item.id) ? (
                <button
                  onClick={() => {
                    dispatch({
                      type: "REMOVE",
                      payload: item,
                    });
                  }}
                  className="btn3"
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    });
                  }}
                  className="btn2"
                >
                  Add to cart
                </button>
              )}
              <div className="book__card mt-4">
                <form>
                  <label htmlFor="Pickup" className="form-label text-muted">
                    PICK UP
                  </label>
                  <input
                    type="date"
                    className="form-control mb-3"
                    name="pickup"
                    onChange={handleChange}
                  />
                  <label htmlFor="Pickup" className="form-label text-muted">
                    DROP OFF
                  </label>
                  <input
                    type="date"
                    className="form-control mb-4"
                    name="dropoff"
                    onChange={handleChange}
                  />
                  {/* <select
                      className="form-select form-select-sm mb-4"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Select Quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                    </select> */}
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

                  <button onClick={handleSubmit} className="btn2">
                    Submit
                  </button>
                </form>
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
