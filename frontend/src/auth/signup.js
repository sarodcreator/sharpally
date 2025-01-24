import React from 'react';
import Navigation from '../components/shared/navbar';
import Image from '../images/janis-dzenis-Qk3wDzNKnF0-unsplash.jpg';
import './style.css';

const signup = () => {

  const reviews = [
    <Image />,
    <Image />,
    <Image />,
    <Image />,
    <Image />,
  ]
  return (
    
    <div>
      <Navigation />
      <div className="signup-sec">
        <div className='left-secImg'>
          <h1>Do you need money, Let's get you started</h1>
          <p>Create a free account and apply to job from trusted companies from all over the world</p>
          <div className="reviews">
            {reviews.map((review, index) =>(
              <img key={index} src={review} alt={`review${index + 1}`} className='review' />
        
            ))}
          </div>
        </div>
        <div className='r-sec'>
          <div className="signupform">
            <h1 className='logo'>SharpallyJobs</h1>
            <form action="submit">
                <h1> Create an Account</h1>
                <div className="form-data">
                  <label>Full Name</label>
                  <input type='text' name='fullname' placeholder='John Doe'/>
                </div>
                <div className="form-data">
                  <label>Email</label>
                  <input type='email' name='email' placeholder='johndoe@gmail.com'/>
                </div>
                <div className="form-data">
                  <label>Phone Number</label>
                  <input type='text' name='fphone' placeholder='8 000 000 0000'/>
                </div>
                <div className="form-data">
                  <label>Password</label>
                  <input type='text' name='password' placeholder='********'/>
                </div>
                <div className="option">
                  <div className="options">
                    <input className='pointer' type="radio" id="recruiter" value="recruiter" name='role' />
                    <label htmlFor='Recruiter'>Hire</label>
                  </div>
                  <div className="options">
                    <input className='pointer' type="radio" id="talent" value="talent" name='role' />
                    <label htmlFor='talent'>Talent</label>
                  </div>
                </div>
                <div className="profile">
                  <label htmlFor="profile">Profile</label>
                  <input 
                    accept='image/*'
                    type="file" className='pointer' />
                </div>
                <button type='submit'>Create Account</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signup;