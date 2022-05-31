import React from 'react'
import './css/comment.css'

function Comment() {
  return (
    <div>
        <form>
            <input className='form-control' type="text" placeholder='leave a comment...' />
            <button className='commentBtn'>Submit</button>
        </form>
    </div>
  )
}

export default Comment