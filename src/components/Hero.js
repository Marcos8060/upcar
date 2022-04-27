import React from 'react'
import './css/hero.css'
import {Link} from 'react-router-dom'

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
             </div>
              <div className='col-md-6 right'>
                  right
             </div>
         </div>
     </div>
    </>
  )
}

export default Hero