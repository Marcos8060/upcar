import React,{useState} from "react";
import "./css/register.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axios'

function Register() {
  const history = useNavigate();
    const initialFormData = Object.freeze({  
        email: '',
        username: '',
        password: ''
    })

    const [formData , updateFormData ] = useState(initialFormData)


    const handleChange = (e) =>{
        updateFormData({
            ...formData,
            // trimming any white space
            [e.target.name]: e.target.value.trim(),
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        axiosInstance.post(`register/`,{
            email: formData.email,
            user_name: formData.username,
            password : formData.password
        })
        .then((res) => {
            history('/login');
            console.log(res);
            console.log(res.data)
        });
    }
  return (
    <div className="app__register">
      <div className="container">
        <div className="row registerContainer">
          <div className="col-md-5">
            <div className="card">
              <h4 className="registerTitle">Sign Up</h4>
              <form>
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username..."
                  required
                  name='username'
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email..."
                  required
                  name='email'
                  onChange={handleChange}
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name='password'
                  placeholder="password..."
                  onChange={handleChange}
                />
                <Link to="/login">Already have an account?</Link>
                <button onClick={handleSubmit} className="registerBtn mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
