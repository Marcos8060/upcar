import React from 'react'
import { GlobalContext } from '../context'

function FirstStep() { 
    const { setCurrentStep, userData,setUserData} = GlobalContext();
    
  return (
    <div>
        <label htmlFor="firstname" className="form-label">First Name</label>
        <input type="text" className="form-control" placeholder='firstname...' />
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input type="text" className="form-control" placeholder='lastname...' />
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder='email...' />
        <button onClick={()=> setCurrentStep(2)} className='step1Btn'>Next</button>
    </div>
  )
}

export default FirstStep