import React,{useEffect,useState} from "react";
import "./css/summary.css";
import { GlobalContext } from "../context";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function Summary() {
  const { state:{cart}, finalData, user } = GlobalContext();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="container app__summary">
      <div className="card">
        <div className="row">
          <div className="col-md-3 leftSummary">
            <h3>Dashboard</h3>
            <br />
            <p>Username : {user.username}</p>
            {finalData.map((data) => (
              <>
                <p>First Name : {data.firstname}</p>
                <p>Last Name : {data.lastname}</p>
                <hr />
                <p>Email : {data.email}</p>
                <p>Address : {data.code}</p>
                <p>County : {data.city}</p>
                <p>Pickup Date : {data.pickup}</p>
                <p>DropOff Date: {data.dropoff}</p>
                <hr />
                <small>Instructions: {data.instructions}</small>
              </>
            ))}
            <hr />
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
             </PayPalScriptProvider>
            {/* <Link to="/payment" className=" btn payment">
              Proceed to Payment
            </Link> */}
          </div>
          <div className="col-md-9 centerSummary">
              {cart.map((car) =>(
                  <>
                  <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <img className="img-fluid summaryImg" src={car.image} alt="" /><br />
                        <small>{car.qty} (items)</small>
                      </div>
                      <div className="col-md-6 text-center">
                        <p>Brand: {car.brand}</p>
                        <p>Price: $ {car.price}</p>
                        <p>Quantity: {car.qty}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <p>Luggage : {car.luggage}</p>
                    <p>Doors : {car.doors}</p>
                    <p>Passengers : {car.passengers}</p>
                  </div>
                </div>
               <hr />
                  </>
              ))}
            <div className="d-flex justify-content-around align-items-center">
              <h4>Total</h4>
              <h4>$ {total}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
