import React,{useState,useEffect} from 'react'
import './css/feature.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const url = 'http://127.0.0.1:8000/api/featured/'
function Featured() {
    const [items,setItems] = useState([])

    useEffect(() =>{
        axios.get(url)
        .then((res) =>{
          setItems(res.data)
        })
    },[])
  return (
    <>
      <div className="app__featured">
          <div className="container">
              <p className='text-center feature_title'>Featured Cars</p>
              <div className="row">
                  {items.map((item) =>(
                      <div className="col-md-6" key={item.id}>
                      <div className="feature__item">
                         <h6>{item.name}</h6> 
                         <p className='price'>$ {item.price}/day </p>  
                         <div className="row">
                             <div className='col-md-6 text-center'>
                               <img className='img-fluid' src={item.image} alt="" />
                             </div>
                             <div className='col-md-6'>
                                 <p>Pieces of luggage: {item.luggage}</p>
                                 <p>Doors: {item.doors}</p>
                                 <p>Maximum passengers: {item.passengers}</p>
                             </div>
                         </div>
                         <Link to={`detail/${item.id}`} className='btn btn1 mt-2'>View Detail</Link>
                      </div>
                  </div>
                  ))}
              </div>
          </div>
      </div>
    </>
  )
}

export default Featured