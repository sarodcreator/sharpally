import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import Navigation from '../components/shared/navbar';
import Image from '../images/janis-dzenis-Qk3wDzNKnF0-unsplash.jpg';
import './style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_API_END_POINT } from '../utils/constant.js';

const Signup = () => {

  const navigate = useNavigate();

  const reviews = [
    Image,
    Image,
    Image,
    Image,
    Image,
  ];

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if(input.file) {
      formData.append('file', input.file)
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers:{
          'Content-Type':'multipart/form-data'
        },
        withCredentials: true,
      })
      if (res.data.success){
        navigate("/login")
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
      <div className="signup-sec reverse">
        <div className='left-secImg'>
          <h1>Do you need money, Let's get you started</h1>
          <p>Discover endless opportunities with Sharpallyjobs, your trusted partner in finding the perfect career. Whether you're a job seeker aiming for growth or an employer searching for top talent, we conect the right people to the right opportunities. Start your journey today and take the first step towards a brighter future.</p>
          <div className="reviews">
            {reviews.map((review, index) => (
              <img key={index} src={review} alt={`review${index + 1}`} className='review' />

            ))}
            <h4 className='users-no'>Over 200+ Users</h4>
          </div>
        </div>
        <div className='r-sec'>
          <div className="signupform">
            <h1 className='logo'>Sharpally<span>Jobs</span></h1>
            <form onSubmit={submitHandler}>
              <h1> Create an Account</h1>
              <div className="form-data">
                <label>Full Name</label>
                <input type='text' name='fullname' value={input.fullname} onChange={changeEventHandler} placeholder='John Doe' />
              </div>
              <div className="form-data">
                <label>Email</label>
                <input type='email' name='email' value={input.email} onChange={changeEventHandler} placeholder='johndoe@gmail.com' />
              </div>
              <div className="form-data">
                <label>Phone Number</label>
                <input type='tel' pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}' name='phoneNumber' value={input.phoneNumber} onChange={changeEventHandler} placeholder='8000 000 0000' />
              </div>
              <div className="form-data">
                <label>Password</label>
                <input type='text' name='password' value={input.password} onChange={changeEventHandler} placeholder='********' />
              </div>
              <div className="interest">
                <h3 className="t">What are you interested in?</h3>
                <div className='option'>
                  <div className="options">
                    <input className='pointer' type="radio" id="recruiter" value="hire"
                      checked={input.role === 'hire'} onChange={changeEventHandler} name='role' />
                    <label htmlFor='Recruiter'>Hire</label>
                  </div>
                  <div className="options">
                    <input className='pointer' type="radio" id="talent" value="talent" checked={input.role === 'talent'} onChange={changeEventHandler} name='role' />
                    <label htmlFor='talent'>Talent</label>
                  </div>
                </div>
              </div>
              <div className="profiles">
                <label htmlFor="profile" className='profile-label'>Upload an image</label>
                <input
                  accept='image/*'
                  type="file" onChange={changeFileHandler} className='img-selector' />
              </div>
              <button type='submit' className='button'>Create Account</button>
            </form>

          </div>
          <p className="login-link">Already have an account? <span><Link to='/login' className='login-btnlink'>Login</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup;