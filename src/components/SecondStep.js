import React from 'react'

function SecondStep() {
  return (
    <div>
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" placeholder='adress...' />
        <label htmlFor="address" className="form-label">City</label>
        <input type="text" className="form-control" placeholder='city...' />
        <label htmlFor="address" className="form-label">Postal Code</label>
        <input type="text" className="form-control" placeholder='code...' />
    </div>
  )
}

export default SecondStep