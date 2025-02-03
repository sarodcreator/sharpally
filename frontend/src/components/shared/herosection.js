import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css'

const herosection = () => {
  return (
      <div className='hero-sec'>
          <div className="hero">
              <span className='heading'>Get paid from your couch</span>
              <h1 className="home-heading">Find your dream job,<br /> bring your projects to life</h1>
              <p className="home-parah">Find high quality talent or open jobs that well fits your project, work from anywhere</p>
              <div className='findjobs'>
                  <input type="text" placeholder='seach for jobs' className='search' />
                  <button>
                      <FaSearch className="search-icon" />
                  </button>
              </div>
          </div>
          <div className='hero-img-grid'>
            <img src='../../images/black-man-city.jpg' alt='person 1' className='masked-img img1' />
            <img src='../../images/janis-dzenis-Qk3wDzNKnF0-unsplash.jpg' alt='person 1' className='masked-img img2' />
            <img src='../../images/janis-dzenis-Qk3wDzNKnF0-unsplash.jpg' alt='person 1' className='masked-img img3' />

          </div>
      </div>
  )
}

export default herosection;