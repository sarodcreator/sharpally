import React from 'react';
import './index.css';
import Header from '../components/shared/navbar.js';
import HeroSection from '../components/shared/herosection.js'
import CategorySec from '../components/shared/categorycarousel.js';
import LatestJobs from '../components/shared/latestjobs.js';

const index = () => {
  return (
    <div className='body'>
      <Header />
      <HeroSection />
      <CategorySec />
<LatestJobs />
    </div>
  )
}

export default index;