import React from 'react'
import './css/footer.css'

function Footer() {
  return (
    <>
      <div className="app__footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 text-center">
                      <h1 className='brand'>Zolacar</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eveniet.</p>
                  </div>
                  <div className="col-md-4 text-center">
                      <p className='copyright'>Copyright Allrights Reserved</p>
                  </div>
                  <div className="col-md-4 text-center">
                      <h6 className='love'>Made with love by Marcos Ochieng</h6>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer