import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';
/*import Image1 from '../../images/adi-goldstein-EUsVwEOsblE-unsplash.jpg';
import Image2 from '../../images/alex-knight-2EJCSULRwC8-unsplash.jpg';
import Image3 from '../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
*/
import Box from './3dbox/3dbox.js';

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
	  {/*<div className='hero-img-grid'>
            <img src={Image1} alt='person 1' className='masked-img img1' />
            <img src={Image2} alt='person 1' className='masked-img img2' />
            <img src={Image3} alt='person 1' className='masked-img img3' />
            <img src={Image3} alt='person 1' className='masked-img img3' />
              <img src={Image3} alt='person 1' className='masked-img img3' />
              <img src={Image3} alt='person 1' className='masked-img img3' />

          </div>*/}
	  <Box />
      </div>
  )
}

export default herosection;
