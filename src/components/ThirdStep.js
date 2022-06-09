import React from 'react'

function ThirdStep() {
  return (
    <div>
        <label htmlFor="address" className="form-label">Pickup</label>
        <input type="text" className="form-control" placeholder='pickup...' />
        <label htmlFor="address" className="form-label">Drop Off</label>
        <input type="text" className="form-control" placeholder='drop off...' />
        <label htmlFor="address" className="form-label">Instructions</label>
        <textarea name="" id="" cols="30" rows="4" className="form-control" placeholder='instructions...'></textarea>
    </div>
  )
}

export default ThirdStep