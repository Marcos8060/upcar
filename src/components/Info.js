import React from 'react'
import './css/info.css'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import SearchIcon from '@material-ui/icons/Search';
import car from '../images/car1.jpg'
import phone from '../images/phone.png'


function Info() {
  return (
    <>
      <div className="app__info">
          <div className="upper__info">
            <div className="container">
                 <p className='text-center works'>How it works</p>
                 <p className='happen text-center'>MAKE IT HAPPEN IN 3 STEPS</p>
                <div className="row">
                    <div className="col-md-7 text-center">
                      <img className='img-fluid' src={phone} alt="" />
                    </div>
                    <div className="col-md-5">
                        <div className="item">
                            <SearchIcon />
                            <span className='direction'>Select your car</span>
                            <p className='desc'>Select your car, choose your location, time and pick it up</p>
                        </div>
                        <div className="item">
                            <SearchIcon />
                            <span className='direction'>Define your booking</span>
                            <p className='desc'>Fill your information into the form and go to next step</p>
                        </div>
                        <div className="item">
                            <SearchIcon />
                            <span className='direction'>Payment</span>
                            <p className='desc'>Select your payment, click ok and It’s all done for you</p>
                        </div>
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