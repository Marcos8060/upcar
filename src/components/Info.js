import React from 'react'
import './css/info.css'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import car from '../images/car1.jpg'

function Info() {
  return (
    <>
      <div className="app__info">
          <div className="container">
            <p className='text-center mt-4 works'>How it works</p>
            <h4 className='text-center title mb-4'>We are here to make your <span>life easy.</span></h4>
            <div className="row mb-4">
                <div className="col-md-4 text-center">
                    <div className="card">
                        <AccessAlarmIcon />
                        <p>Fast and easy booking</p>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque perspiciatis repellat odio obcaecati accusantium?</small>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card">
                        <LocationOnIcon />
                        <p>Many pick up locations</p>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque perspiciatis repellat odio obcaecati accusantium?</small>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card text-center">
                        <ConfirmationNumberIcon />
                        <p>No booking charges</p>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque perspiciatis repellat odio obcaecati accusantium?</small>
                    </div>
                </div>
            </div>
          </div>
          <div className="container">
              <div className="row lower">
                  <div className="col-md-6">
                      <img className='img-fluid car1' src={car} alt="" />
                  </div>
                  <div className="col-md-6 text-center">
                      <p className='cto'>Quality cars with <br /> affordable prices</p>
                      <p>Our company was built by trust and reputation. We know how to make our customers love us by our high quality products with affordable prices. We promise to make you have the interesting experiences.</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Info