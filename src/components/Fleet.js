import React,{useState,useEffect} from 'react'
import './css/fleet.css'
import car from '../images/car1.jpg'
import { Link } from 'react-router-dom'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/cars/'
function Fleet() {
    const [cars,setCars] = useState([])

    useEffect(() =>{
        axios.get(url)
        .then((res) =>{
            setCars(res.data)
        })
    },[])
  return (
    <div className='app__fleet'>
        <div className="container">
            <div className="row">
                {cars.map((car) =>(
                    <div className="col-md-4" style={{ marginBottom: '7vh'}} key={car.id}>
                    <div>
                        <img className='img-fluid fleetImg' src={car.image} alt="" />
                        <div className="footer">
                          <p>{car.name}</p>
                          <p className='price'>$ {car.price}/day</p>
                          <p className='gray'>Pieces of luggage: {car.luggage}</p>
                          <p className='gray'>Doors: {car.doors}</p>
                          <p className='gray'>Maximum passengers: {car.passengers}</p>
                          <Link to={`detail/${car.id}`} className='btn viewBtn'>View Detail</Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Fleet