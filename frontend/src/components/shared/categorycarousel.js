import React from 'react';
import 'style.css';
import { Swiper, SwiperSlide } from 'swiper-react';


const categorycarousel = () => {
    const categories = [
        {name: "Development & IT", rating: '4.85/5', skills: "1853 skills"},
      { name: "AI Services", rating: '4.8/5', skills: "294 skills" },
      { name: "Design & Creative", rating: '4.91/5', skills: "968 skills" },
      { name: "Sales & Marketing", rating: '4.77/5', skills: "392 skills" },
      { name: "Writing and Translation", rating: '4.92/5', skills: "505 skills" },
    ]
  return (
    <div>
      <h2>Browse talents by category</h2>
      <Swiper spacebetween={50} slidesPerview={2} autoplay={{delay: 3000}}>
        {categories.map((cat, index) => (
          <swiperSlide key={index}>
            <button className='control-btn'>{cat}</button>
          </swiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default categorycarousel;