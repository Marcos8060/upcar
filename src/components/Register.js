import React from "react";
import "./css/register.css";

function Register() {
  return (
    <div className="app__register">
      <div className="container">
        <div className="row registerContainer">
          <div className="col-md-5">
            <div className="card">
                <form>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" placeholder="username..." required />
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email..." required />
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="password..." />
                    <button className="registerBtn">Submit</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
