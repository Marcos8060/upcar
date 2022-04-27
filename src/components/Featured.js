import React from 'react'
import './css/feature.css'
import car from '../images/car1.jpg'


function Featured() {
  return (
    <>
      <div className="app__featured">
          <div className="container">
              <p className='text-center feature_title'>Featured Cars</p>
              <div className="row">
                  <div className="col-md-6">
                      <div className="feature__item">
                         <h6>Ferrari SP38</h6> 
                         <p className='price'>$23.90 </p>  
                         <div className="row">
                             <div className='col-md-6 text-center'>
                               <img className='img-fluid' src={car} alt="" />
                             </div>
                             <div className='col-md-6'>
                                 <p>Pieces of luggage: 4</p>
                                 <p>Doors: 4</p>
                                 <p>Maximum passengers: 7</p>
                             </div>
                         </div>
                         <button className='btn1 mt-2'>View Detail</button>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="feature__item">
                         <h6>Ferrari SP38</h6> 
                         <p className='price'>$23.90 </p>  
                         <div className="row">
                             <div className='col-md-6 text-center'>
                               <img className='img-fluid' src={car} alt="" />
                             </div>
                             <div className='col-md-6'>
                                 <p>Pieces of luggage: 4</p>
                                 <p>Doors: 4</p>
                                 <p>Maximum passengers: 7</p>
                             </div>
                         </div>
                         <button className='btn1 mt-2'>View Detail</button>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="feature__item">
                         <h6>Ferrari SP38</h6> 
                         <p className='price'>$23.90 </p>  
                         <div className="row">
                             <div className='col-md-6 text-center'>
                               <img className='img-fluid' src={car} alt="" />
                             </div>
                             <div className='col-md-6'>
                                 <p>Pieces of luggage: 4</p>
                                 <p>Doors: 4</p>
                                 <p>Maximum passengers: 7</p>
                             </div>
                         </div>
                         <button className='btn1 mt-2'>View Detail</button>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="feature__item">
                         <h6>Ferrari SP38</h6> 
                         <p className='price'>$23.90 </p>  
                         <div className="row">
                             <div className='col-md-6 text-center'>
                               <img className='img-fluid' src={car} alt="" />
                             </div>
                             <div className='col-md-6'>
                                 <p>Pieces of luggage: 4</p>
                                 <p>Doors: 4</p>
                                 <p>Maximum passengers: 7</p>
                             </div>
                         </div>
                         <button className='btn1 mt-2'>View Detail</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Featured