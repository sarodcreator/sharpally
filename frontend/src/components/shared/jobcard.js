import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';


const Jobcard = () => {
  const [Bookmarked, setBookmarked] = useState(false);

  return (
    <div>
      <div className="jobcard-title">
        <p>2 days ago</p>
        <button onClick={() => setBookmarked(!Bookmarked)}>
          {Bookmarked ? <FaBookmark color="gold" size={24} /> : <FaRegBookmark size={24} />}
        </button>
      </div>
      <div className='jobcard-img'>
        <img src="" alt="company logo" />
      </div>
      <div className="jobcard-dts">
        <h1>Company Name</h1>
        <p>Nigeria</p>
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
        <button className="jobcard-btn">Save for Later</button>
      </div>
    </div>
  )
}

export default Jobcard;