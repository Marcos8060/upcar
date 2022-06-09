import React,{useState,useEffect} from "react";
import "./css/checkout.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import { GlobalContext } from "../context";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

function Checkout() {
  const { currentStep } = GlobalContext();
  const { state:{cart}} = GlobalContext();
  const [total, setTotal] = useState();


  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

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
              {showStep(currentStep)}
              {/* <form>
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
              </form> */}
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
