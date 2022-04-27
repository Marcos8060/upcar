import React from 'react'
import './css/choose.css'
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import GradeIcon from '@material-ui/icons/Grade';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';

function Choose() {
  return (
    <>
      <div className="app__choose">
          <div className="container">
              <h5 className='text-center mb-4'>Why choose us?</h5>
              <div className="row mt-4">
                  <div className="col-md-4">
                    <PhoneCallbackIcon />
                    <span>Premium support</span>
                    <p className='desc'>We’re available for helping you, including holiday</p>
                  </div>
                  <div className="col-md-4">
                    <GradeIcon />
                    <span>High quality cars</span>
                    <p className='desc'>Our cars ‘re certificated by gurus with 20+ years of experience</p>
                  </div>
                  <div className="col-md-4">
                    <CreditCardIcon />
                    <span>No prepayment required</span>
                    <p className='desc'>Just provide us your Social Security Number and It’s all done</p>
                  </div>
                  <div className="col-md-4">
                    <FavoriteBorderIcon />
                    <span>Trusted by 10+ clients</span>
                    <p className='desc'>We have 10k+ happy clients who love us and ready for our cars</p>
                  </div>
                  <div className="col-md-4">
                    <ClearIcon />
                    <span>Free cancelation</span>
                    <p className='desc'>No extra fee, you can cancel your booking anytime</p>
                  </div>
                  <div className="col-md-4">
                    <AddIcon />
                    <span>And more features</span>
                    <p className='desc'>This space is too small to show you everything we have</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Choose