import React from "react";
import car from "../images/car1.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import "./css/cart.css";
import { Link } from 'react-router-dom'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';

function Cart() {
  return (
    <>
      <div className="app__cart">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 text-center">
                    <img className="img-fluid CartImg" src={car} alt="" />
                  </div>
                  <div className="col-md-3 text-center">
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
                  <div className="col-md-3 text-center">
                      <span>$ 23.00</span>
                 </div>
                  <div className="col-md-3 text-center">
                    <DeleteIcon className="deleteIcon" />
                  </div>
                </div>
                <hr />
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 text-center">
                    <img className="img-fluid CartImg" src={car} alt="" />
                  </div>
                  <div className="col-md-3 text-center">
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
                  <div className="col-md-3 text-center">
                      <span>$ 23.00</span>
                 </div>
                  <div className="col-md-3 text-center">
                    <DeleteIcon className="deleteIcon" />
                  </div>
                </div>
                <hr />
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 text-center">
                    <img className="img-fluid CartImg" src={car} alt="" />
                  </div>
                  <div className="col-md-3 text-center">
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
                  <div className="col-md-3 text-center">
                      <span>$ 23.00</span>
                 </div>
                  <div className="col-md-3 text-center">
                    <DeleteIcon className="deleteIcon" />
                  </div>
                </div>
                <hr />
                <Link to='/' className="btn continueBtn">Continue Shopping</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                  <div className="d-flex justify-content-between align-items-center">
                   <p>2 Items</p>
                   <p>$ 799</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                   <p>Shipping</p>
                   <p>$ 19</p>
                  </div>
                  <Link to='/checkout' className="btn continueBtn">Proceed to checkout</Link>
              </div>
              <div className="card mt-3 mb-4">
                  <div className="d-flex align-items-center">
                  <VerifiedUserIcon className='cartIcons' />
                  <span className="text-muted">Security Policy(edit with customer assurance module)</span>
                  </div>
                  <div className="d-flex align-items-center">
                  <LocalShippingIcon className='cartIcons' />
                  <span className="text-muted">Delivery Policy Policy(edit with customer assurance module)</span>
                  </div>
                  <div className="d-flex align-items-center">
                  <AssignmentReturnIcon className='cartIcons' />
                  <span className="text-muted">Delivery Policy Policy(edit with customer assurance module)</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
