import React from 'react'
import './css/hero.css'
import car from '../images/range.webp'

function Hero() {
  return (
    <>
     <div className="app__hero">
         <h6></h6>
         <div className="row g-0">
             <div className='col-md-6 left'>
                 <div className="d-flex align-tems-center justify-content-between">
                     <div>
                       <h1 className='brand'>Range</h1>
                     </div>
                     <div>
                        <a className='m-3 text-decoration-none btn' href="/register">Sign Up</a>
                        <a className='text-decoration-none btn' href="/login">Login</a>
                     </div>
                 </div>
                 <h2 className='intro'>Hire the best cars in <br /> town at friendly prices.</h2>
                 <p className='text'>Dont deny yourself the pleasure of driving the best premium <br /> cars from around the world here and now.</p>
                 <p class="text">We have patnered with the world’s leading manufacture’s <br /> and brands to create a cross border experience <br /> without having to sacrifice the comfort of city rides.</p>
             </div>
              <div className='col-md-6 right'>
                  <img className='car' src={car} alt="" />
             </div>
         </div>
     </div>
    </>
  )
}

export default Hero