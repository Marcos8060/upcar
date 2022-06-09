import React from "react";
import { GlobalContext } from "../context";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function SecondStep() {
  const { setCurrentStep, userData, setUserData } = GlobalContext();
  return (
    <div>
      <label htmlFor="address" className="form-label">
        Address
      </label>
      <input 
        value={userData['address']}
        onChange={(e)=> setUserData({...userData, 'address': e.target.value})}
        type="text" 
        className="form-control" 
        placeholder="adress..." />
      <label htmlFor="address" className="form-label">
        City
      </label>
      <input 
        value={userData['city']}
        onChange={(e)=> setUserData({...userData, 'city': e.target.value})}
        type="text" 
        className="form-control" 
        placeholder="city..." />
      <label htmlFor="address" className="form-label">
        Postal Code
      </label>
      <input 
        value={userData['code']}
        onChange={(e)=> setUserData({...userData, 'code': e.target.value})}
        type="text" 
        className="form-control" 
        placeholder="code..." />
      <div className="d-flex align-items-center justify-content-center">
        <button onClick={() => setCurrentStep(1)} className="step2Btn">
          <AiOutlineLeft /> Back
        </button>
        <button onClick={() => setCurrentStep(3)} className="step2Btn">
          Next <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default SecondStep;
