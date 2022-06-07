import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './css/search.css'
import Navbar from './Navbar'

function Search() {
    const search = 'search'
    const [appState,setAppState] = useState({
        search : '',
        cars: [],
    })

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/cars/' + search + '/' + window.location.search)
        .then((res) =>{
            const returnedCars = res.data;
            setAppState({cars: returnedCars })
            console.log(res.data);
        })
    },[setAppState])
  return (
      <>
      <div className='container app__search'>
         <Navbar />
        <h2 className='text-center mb-4'>Welcome to your Search Results</h2>
        <div className="underline"></div>
        <div className="row">
            {appState.cars.map((car) =>(
               <div className="col-md-4" style={{ marginBottom: '7vh'}} key={car.id}>
               <div>
                   <img className='img-fluid fleetImg' src={car.image} alt="" />
                   <div className="footer">
                     <p>{car.name}</p>
                     <p className='price'>$ {car.price}/day</p>
                     <p className='gray'>Pieces of luggage: {car.luggage}</p>
                     <p className='gray'>Doors: {car.doors}</p>
                     <p className='gray'>Maximum passengers: {car.passengers}</p>
                     {/* <Link to={`detail/${car.id}`} className='btn viewBtn'>View Detail</Link> */}
                   </div>
               </div>
           </div>
            ))}
        </div>
    </div>
      </>
  )
}

export default Search