import React from 'react'
import './css/coment.css'

function Comment() {
  return (
    <>
      <div className="app__comment">
          <div className="container">
              <p className='text-center comment__title'>Testimonials</p>
               <div className="comment_box">
                    <p className='comment'>My wife and I had a great car for rent in 5 days <br /> with affordable price. They also called us <br /> everyday just to ask how we feel. Nice support, guys!</p>
                    <small>By Ann Wanjiku</small>
               </div>
          </div>
      </div>
    </>
  )
}

export default Comment