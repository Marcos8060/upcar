import React,{useState,useEffect} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./css/cart.css";
import { Link } from "react-router-dom";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import { GlobalContext } from "../context";
import axios from "axios";

function Cart() {
  const {
    state: { cart },
    dispatch
  } = GlobalContext();
  const [total, setTotal] = useState();
  const [date,setDate] = useState([])

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/api/pick/')
    .then((res) =>{
      setDate(res.data)
    })
  },[])

  if(cart.length == 0){
    return(
      <h3 className="text-center empty">Your Cart is empty</h3>
    )
  }
  return (
    <>
      <div className="app__cart">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="row d-flex align-items-center">
                  {cart.map((car) => (
                    <>
                      <div className="col-md-3 text-center" key={car.id}>
                        <img className="img-fluid CartImg" src={car.image} alt="" />
                      </div>
                      <div className="col-md-3 text-center">
                        <span>{car.name}</span>
                        <br />
                        <span className="price">$ {car.price}</span>
                        <br />
                        {date.map((day) =>(
                          <>
                            <span>Pick up: {day.pickup}</span>
                              <br />
                            <span>Drop Off: {day.dropoff}</span>
                          </>
                        ))}
                      </div>
                      <div className="col-md-3 text-center">
                      <select
                            onChange={(e) =>
                              dispatch({
                                type: "CHANGE_CART_QTY",
                                payload: {
                                  id: car.id,
                                  qty: e.target.value,
                                },
                              })
                            }
                            className="form-select"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                      </div>
                      <div className="col-md-3 text-center">
                        <DeleteIcon 
                        onClick={() => {
                          dispatch({
                            type: "REMOVE",
                            payload: car,
                          });
                        }}
                        className="deleteIcon" />
                      </div>
                      <hr />
                    </>
                  ))}
                </div>
                <Link to="/" className="btn continueBtn">
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="d-flex justify-content-between align-items-center">
                  <p>{cart.length} Items</p>
                  <p>$ {total}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Shipping</p>
                  <p>$ 19</p>
                </div>
                <Link to="/checkout" className="btn continueBtn">
                  Proceed to checkout
                </Link>
              </div>
              <div className="card mt-3 mb-4">
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
    </>
  );
}

export default Cart;
