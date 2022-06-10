import React, { useState, useEffect } from "react";
import "./css/detail.css";
import Footer from "./Footer";
import GradeIcon from "@material-ui/icons/Grade";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context";
import Navbar from "./Navbar";

function FleetDetail() {
  const {
    state: { cart },
    dispatch,
  } = GlobalContext();
  const [item, setItem] = useState([]);
  const [pickup,setPickup] = useState('')
  const [dropoff,setDropoff] = useState('')
  const [data,setData] = useState([])
  const { id } = useParams();
  const url = `http://127.0.0.1:8000/api/cars/${id}/`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setItem(res.data);
    });
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(pickup && dropoff){
      const information = {pickup,dropoff}
      setData((data) =>{
        return(
          [...data, information]
        ) 
      })
    }
  }
  

  return (
    <>
    <Navbar />
      <div className="app__detail">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <p className="name">{item.name}</p>
            <p className="price">$ {item.price}</p>
          </div>
          <img className="img-fluid car__detail" src={item.image} alt="" />
          <div className="car__information mt-4">
            {/* <h6 className="info__title">Car Information</h6> */}
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
                  <Link to="/cart" className="visitCartBtn btn">
                    Go to Cart
                  </Link>
                </ul>
              </div>
            </div>
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
                <p className="mt-4 mb-4 gallery__title">Image Gallery</p>
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
                    <span>Trusted by 10+ clients</span>
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
                   <h4 className="text-center">Vehicle History</h4>
                  <p className="text-center">
                  The year 1886 is regarded as the birth year of the car when German inventor Carl Benz patented his Benz Patent-Motorwagen. Cars became widely available in the early 20th century. One of the first cars accessible to the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company.
                  </p>
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

export default FleetDetail;
