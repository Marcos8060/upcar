import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='app__register'>
          <div className="container">
        <div className="row registerContainer">
          <div className="col-md-5">
            <div className="card">
              <h4 className="registerTitle">Login</h4>
              <form>
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username..."
                  required
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password..."
                />
                <Link to="/register">Don't have an account?</Link>
                <button className="registerBtn mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login