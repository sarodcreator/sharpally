import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import "./style.css";
import Image1 from '../../images/black-man-city.jpg';

const Jobcard = () => {
  const [Bookmarked, setBookmarked] = useState(false);

  return (
    <div className="jobcard">
      <div className="jobcard-title">
        <p>2 days ago</p>
        <button onClick={() => setBookmarked(!Bookmarked)}>
          {Bookmarked ? <FaBookmark color="gold" size={24} /> : <FaRegBookmark size={24} />}
        </button>
      </div>
      <div className="jobcard-company-info">
        <div className='jobcard-img'>
          <img src={Image1} alt="company logo" />
        </div>
        <div className="jobcard-dts">
          <h1>Company Name</h1>
          <p>Nigeria</p>
        </div>
        </div>
      <div className="jobcard-des">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetuer, adipisicing elit. ygkcxkg nyycjbbj hkcbbcjcbtt gcgck gctbckvj ch  bc ujjhc  hgcjg g  vhgc tg</p>
      </div>
      <div className="jobcard-banners">
        <p>12 Positions</p>
        <p>Part Time</p>
        <p>Remote</p>
      </div>
      <div className="jobcard-btns">
        <button className="jobcard-btn">Details</button>
        <button className="jobcard-btn save">Save for Later</button>
      </div>
    </div>
  )
}

export default Jobcard;