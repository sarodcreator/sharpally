import React from 'react';
import './index.css';
import Header from '../components/shared/navbar.js';
import HeroSection from '../components/shared/herosection.js'
import CategorySec from '../components/shared/categorycarousel.js';

const index = () => {
  return (
    <div className='body'>
      <Header />
      <HeroSection />
      <CategorySec />
    </div>
  )
}

export default index;