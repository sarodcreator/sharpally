import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import Navigation from '../components/shared/navbar';
import Image from '../images/janis-dzenis-Qk3wDzNKnF0-unsplash.jpg';
import './style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_API_END_POINT } from '../utils/constant.js';

const Signin = () => {

  const navigate = useNavigate();

  const reviews = [
    Image,
    Image,
    Image,
    Image,
    Image,
  ];

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate("/")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    
    <div>
      {/*<Navigation />*/}
      <div className="signup-sec">
        <div className='left-secImg'>
          <h1>Welcome back! <br/><span className='text-p'>Experience endless opportunities</span></h1>
          <p>Discover endless opportunities with Sharpallyjobs, your trusted partner in finding the perfect career. Whether you're a job seeker aiming for growth or an employer searching for top talent, we conect the right people to the right opportunities. Start your journey today and take the first step towards a brighter future.</p>
          <div className="reviews">
            {reviews.map((review, index) =>(
              <img key={index} src={review} alt={`review${index + 1}`} className='review' />
        
            ))}
            <h4 className='users-no'>Over 200+ Users</h4>
          </div>
        </div>
        <div className='r-sec'>
          <div className="signupform">
            <h1 className='logo'>Sharpally<span>Jobs</span></h1>
            <form onSubmit={submitHandler} className='login-form'>
                <h1> Signin to your Account</h1>
                <div className="form-data">
                  <label>Email</label>
                <input type='email' value={input.email} onChange={changeEventHandler} name='email' placeholder='johndoe@gmail.com'/>
                </div>
                <div className="form-data">
                  <label>Password</label>
                  <input type='text' name='password' value={input.password} onChange={changeEventHandler} placeholder='********'/>
                </div>
                <button type='submit' className='button'>Sign In</button>
              </form>
              
          </div>
          <p className="login-link">Don't have an account? <span><Link to='/signup'  className='login-btnlink'>Register</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Signin;