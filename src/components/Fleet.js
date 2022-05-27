import React from 'react'
import './css/fleet.css'
import car from '../images/car1.jpg'
import { Link } from 'react-router-dom'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';

function Fleet() {
  return (
    <div className='app__fleet'>
        <div className="container">
            <div className="row">
                <div className="col-md-4" style={{ marginBottom: '7vh'}}>
                    <div>
                        <img className='img-fluid fleetImg' src={car} alt="" />
                        <div className="footer">
                          <p>Ferrari</p>
                          <p className='price'>$ 23/day</p>
                          <p className='gray'>Pieces of luggage: 4</p>
                          <p className='gray'>Doors: 3</p>
                          <p className='gray'>Maximum passengers: 4</p>
                          <Link to='/detail' className='btn viewBtn'>View Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className='img-fluid fleetImg' src={car} alt="" />
                        <div className="footer">
                          <p>Ferrari</p>
                          <p className='price'>$ 23/day</p>
                          <p className='gray'>Pieces of luggage: 4</p>
                          <p className='gray'>Doors: 3</p>
                          <p className='gray'>Maximum passengers: 4</p>
                          <Link to='/detail' className='btn viewBtn'>View Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className='img-fluid fleetImg' src={car} alt="" />
                        <div className="footer">
                          <p>Ferrari</p>
                          <p className='price'>$ 23/day</p>
                          <p className='gray'>Pieces of luggage: 4</p>
                          <p className='gray'>Doors: 3</p>
                          <p className='gray'>Maximum passengers: 4</p>
                          <Link to='/detail' className='btn viewBtn'>View Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className='img-fluid fleetImg' src={car} alt="" />
                        <div className="footer">
                          <p>Ferrari</p>
                          <p className='price'>$ 23/day</p>
                          <p className='gray'>Pieces of luggage: 4</p>
                          <p className='gray'>Doors: 3</p>
                          <p className='gray'>Maximum passengers: 4</p>
                          <Link to='/detail' className='btn viewBtn'>View Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fleet