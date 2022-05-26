import React from "react";
import car from "../images/car1.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import "./css/cart.css";
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <div className="app__cart">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img className="img-fluid CartImg" src={car} alt="" />
                  </div>
                  <div>
                    <span>Ferrari1</span>
                    <br />
                    <span className="price">$23.00</span>
                    <br />
                    <span>Size: S</span>
                    <br />
                    <span>Color: White</span>
                    <br />
                    <span>Pick up: 2022 04 24</span>
                    <br />
                    <span>Drop Off: 2022 04 24</span>
                  </div>
                  <div>$ 23.00</div>
                  <div>
                    <DeleteIcon className="deleteIcon" />
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img className="img-fluid CartImg" src={car} alt="" />
                  </div>
                  <div>
                    <span>Ferrari1</span>
                    <br />
                    <span className="price">$23.00</span>
                    <br />
                    <span>Size: S</span>
                    <br />
                    <span>Color: White</span>
                    <br />
                    <span>Pick up: 2022 04 24</span>
                    <br />
                    <span>Drop Off: 2022 04 24</span>
                  </div>
                  <div>$ 23.00</div>
                  <div>
                    <DeleteIcon className="deleteIcon" />
                  </div>
                </div>
                <hr />
                <Link to='/' className="btn continueBtn">Continue Shopping</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
