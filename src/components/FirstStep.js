import React from 'react'

function FirstStep() {
  return (
    <div>
        <label htmlFor="firstname" className="form-label">First Name</label>
        <input type="text" className="form-control" placeholder='firstname...' />
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input type="text" className="form-control" placeholder='lastname...' />
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder='email...' />
    </div>
  )
}

export default FirstStep