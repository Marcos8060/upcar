import React from 'react'
import './css/footer.css'

function Footer() {
  return (
    <>
      <div className="app__footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 text-center">
                      <h1 className='brand'>Range</h1>
                  </div>
                  <div className="col-md-4 text-center">
                      <p>Copyright Allrights Reserved</p>
                  </div>
                  <div className="col-md-4 text-center">
                      <h6>Made with love by Marcos Ochieng</h6>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer