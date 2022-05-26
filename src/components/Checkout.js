import React from 'react'
import './css/checkout.css'

function Checkout() {
  return (
    <div className='app__checkout'>
        <div className="container">
            <div className="row">
                <div className="col-md-7 mb-4">
                    <div className="card">
                        <h4>Personal Information</h4>
                        <p>The selected address will be used both as your personal address (for invoice) and as your delivery address.</p>
                        <hr />
                        <form>
                            <label htmlFor="first name" className="form-label">First Name:</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="last name" className="form-label">Last Name:</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" />
                            <label htmlFor="adress" className="form-label">Adress:</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="city" className="form-label">City:</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="postal code" className="form-label">Postal Code:</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="county" className="form-label">County:</label>
                            <input type="text" className="form-control" />
                            <button className='submitBtn btn'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <p>2 items</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout