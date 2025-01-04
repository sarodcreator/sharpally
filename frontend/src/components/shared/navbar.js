import React from 'react';
import "/navbar.css"

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>Sharpally<span className='job'>Jobs</span></h1>
        </div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>Jobs</li>
                <li>Browse</li>
            </ul>
        </div>
    </div>
  )
}

export default navbar