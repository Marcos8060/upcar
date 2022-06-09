import React from "react";
import { GlobalContext } from "../context";
import { AiOutlineLeft } from "react-icons/ai";

function ThirdStep() {
  const { submitData, setCurrentStep, userData,setUserData } = GlobalContext();
  return (
    <div>
      <label htmlFor="address" className="form-label">
        Pickup
      </label>
      <input 
        value={userData['pickup']}
        onChange={(e)=> setUserData({...userData, 'pickup': e.target.value})}
        type="date" 
        className="form-control" 
        placeholder="pickup..." />
      <label htmlFor="address" className="form-label">
        Drop Off
      </label>
      <input 
        value={userData['dropoff']}
        onChange={(e)=> setUserData({...userData, 'dropoff': e.target.value})}
        type="date" 
        className="form-control" 
        placeholder="drop off..." />
      <label htmlFor="address" className="form-label">
        Instructions
      </label>
      <textarea
        value={userData['instructions']}
        onChange={(e)=> setUserData({...userData, 'instructions': e.target.value})}
        name=""
        id=""
        cols="30"
        rows="4"
        className="form-control"
        placeholder="Instructions..."
      ></textarea>
      <div className="d-flex align-items-center justify-content-center">
        <button onClick={() => setCurrentStep(2)} className="step2Btn">
          <AiOutlineLeft /> Back
        </button>
        <button onClick={submitData} className="step2Btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ThirdStep;
