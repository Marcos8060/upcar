import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axios';
import { GlobalContext } from '../context';

function Login() {
  const { loginUser } = GlobalContext();
  // const history = useNavigate();
  // const initialFormData = Object.freeze({
  //   email : '',
  //   password : '',
  // })

  // const [formData,updateFormData] = useState(initialFormData)

  // const handleChange = (e) =>{
  //   updateFormData({
  //     ...formData,
  //     [e.target.name] : e.target.value.trim(),
  //   })
  // }

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   console.log(formData);

  //   axiosInstance.post('token/',{
  //     email : formData.email,
  //     password : formData.password
  //   })
  //   .then((res) =>{
  //     localStorage.setItem('access_token', res.data.access);
  //     localStorage.setItem('refresh_token', res.data.refresh);
  //     axiosInstance.defaults.headers['Authorization'] = 
  //     'JWT ' + localStorage.getItem('access_token')
  //     history('/')
  //   });

  // }

  return (
    <div className='app__register'>
          <div className="container">
        <div className="row registerContainer">
          <div className="col-md-5">
            <div className="card">
              <h4 className="registerTitle">Login</h4>

              <form onSubmit={loginUser}>
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username..."
                  name='username'
                  required
                  // onChange={handleChange}
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="password..."
                  name='password'
                  // onChange={handleChange}
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