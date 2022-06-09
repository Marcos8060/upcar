import React from 'react'
import { GlobalContext } from '../context';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

function SecondStep() {
    const { setCurrentStep, userData,setUserData} = GlobalContext();
  return (
    <div>
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" placeholder='adress...' />
        <label htmlFor="address" className="form-label">City</label>
        <input type="text" className="form-control" placeholder='city...' />
        <label htmlFor="address" className="form-label">Postal Code</label>
        <input type="text" className="form-control" placeholder='code...' />
        <div className='d-flex align-items-center justify-content-center'>
        <button onClick={()=> setCurrentStep(3)} className='step2Btn'><ArrowLeftIcon/>Back</button>
        <button onClick={()=> setCurrentStep(3)} className='step2Btn'>Next</button>
        </div>
    </div>
  )
}

export default SecondStep