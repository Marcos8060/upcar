import React, { useState, useEffect } from "react";
import "./css/checkout.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import { GlobalContext } from "../context";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";

function Checkout() {
  const { currentStep } = GlobalContext();
  const {
    state: { cart },
  } = GlobalContext();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }

  return (
    <div className="app__checkout">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-4">
            <div className="card">
              <h4 className="text-center">Personal Information</h4>
              <div className="d-flex justify-content-center">
                <Stepper
                  activeStep={currentStep - 1}
                  orientation="horizontal"
                >
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                </Stepper>
              </div>
              {showStep(currentStep)}
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card">
              <p className="items">{cart.length} items</p>
              <div class="dropdown">
                <a
                  className="btn dropdown-toggle viewCartBtn"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOW DETAILS
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
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <span>Total</span>
                    <span>$ {total}</span>
                  </div>
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Sub Total</p>
                <p>$ {total}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Shipping</p>
                <p>$ 19.00</p>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <VerifiedUserIcon className="cartIcons" />
                <span className="text-muted">
                  Security Policy(edit with customer assurance module)
                </span>
              </div>
              <div className="d-flex align-items-center">
                <LocalShippingIcon className="cartIcons" />
                <span className="text-muted">
                  Delivery Policy Policy(edit with customer assurance module)
                </span>
              </div>
              <div className="d-flex align-items-center">
                <AssignmentReturnIcon className="cartIcons" />
                <span className="text-muted">
                  Delivery Policy Policy(edit with customer assurance module)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
