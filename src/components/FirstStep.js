import React from "react";
import { GlobalContext } from "../context";

function FirstStep() {
  const { setCurrentStep, userData, setUserData } = GlobalContext();

  return (
    <div className="first">
      <label htmlFor="firstname" className="form-label">
        First Name
      </label>
      <input 
        value={userData['firstname']}
        onChange={(e)=> setUserData({...userData, 'firstname': e.target.value})}
        type="text" 
        className="form-control"
        placeholder="firstname..."
        required />
      <label htmlFor="lastname" className="form-label">
        Last Name
      </label>
      <input 
        value={userData['lastname']}
        onChange={(e)=> setUserData({...userData, 'lastname': e.target.value})}
        type="text" 
        className="form-control" 
        placeholder="lastname..."
        required />
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input 
        value={userData['email']}
        onChange={(e)=> setUserData({...userData, 'email': e.target.value})}
        type="email" 
        className="form-control" 
        placeholder="email..."
        required />
      <button onClick={() => setCurrentStep(2)} className="step1Btn">
        Next
      </button>
    </div>
  );
}

export default FirstStep;
