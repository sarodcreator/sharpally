import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

const navbar = () => {
  const user = false;
  return (
    <div className='navbar'>
      {/* Logo */}
      <div className="logo">
        <h1>Sharpally<span className='job'>Jobs</span></h1>
      </div>

      {/* navigation menu */}
      <div className="nav">
        <ul>
  	    <li><Link to="/home">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/discover">Browse</Link></li>
        </ul>
      </div>
      {
        !user ? (
          <div className='auth-btns'>
            <Link to='/login'><button className='auth-btn'>Login</button></Link>
            <Link to='signup'><button className='auth-btn reg'>Create Account</button></Link>
          </div>
        ) : (
          <Popover >
            <PopoverTrigger asChild>
              <Avatar className='profile-img'>
                <AvatarImage className='profile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt='profile' />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent>
              <div className="container">

                <div className="container-cont">
                  <Avatar className='profile-img'>
                    <AvatarImage className='profile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt='profile' />
                  </Avatar>
                  <div>
                    <h4 className="user">Barry Saro</h4>
                    <p className="desc">Frontend Engineer || Product Designer</p>
                  </div>
                </div>

                <div className="popover-btn">
                  <button className="view-profile">View Profile</button>
                  <button className="view-profile">Logout</button>

                </div>
              </div>

            </PopoverContent>
          </Popover>
        )}
    </div >
  )
}

export default navbar 
