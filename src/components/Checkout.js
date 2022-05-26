import React from "react";
import "./css/checkout.css";
import car from "../images/car1.jpg";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";

function Checkout() {
  return (
    <div className="app__checkout">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-4">
            <div className="card">
              <h4>Personal Information</h4>
              <p>
                The selected address will be used both as your personal address
                (for invoice) and as your delivery address.
              </p>
              <hr />
              <form>
                <label htmlFor="first name" className="form-label">
                  First Name:
                </label>
                <input type="text" className="form-control" />
                <label htmlFor="last name" className="form-label">
                  Last Name:
                </label>
                <input type="text" className="form-control" />
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input type="email" className="form-control" />
                <label htmlFor="adress" className="form-label">
                  Adress:
                </label>
                <input type="text" className="form-control" />
                <label htmlFor="city" className="form-label">
                  City:
                </label>
                <input type="text" className="form-control" />
                <label htmlFor="postal code" className="form-label">
                  Postal Code:
                </label>
                <input type="text" className="form-control" />
                <label htmlFor="county" className="form-label">
                  County:
                </label>
                <input type="text" className="form-control" />
                <button className="submitBtn btn">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card">
              <p className="items">2 items</p>
              <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"></a>
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
                    <ul class="navbar-nav me-auto">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          SHOW DETAILS
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
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="d-flex justify-content-between align-items-center">
                <p>Sub Total</p>
                <p>$ 39.00</p>
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
