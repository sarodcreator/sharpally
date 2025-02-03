import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const categories = [
  { name: "Development & IT", rating: "4.85/5", skills: "1853 skills" },
  { name: "AI Services", rating: "4.8/5", skills: "294 skills" },
  { name: "Design & Creative", rating: "4.91/5", skills: "968 skills" },
  { name: "Sales & Marketing", rating: "4.77/5", skills: "392 skills" },
  { name: "Writing & Translation", rating: "4.92/5", skills: "505 skills" }
];

const CategoryCarousel = () => {
  return (
    <div className="categorySec">
      <h2 className="cat-heading">Browse talent by category</h2>
<p className="carousel-body">Need a job? <span className="carousel-body-span"Browse our list</span></p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="catReviews">
              <h3 className="catReview">{cat.name}</h3>
              <p className="catReview">⭐ {cat.rating}</p>
              <p className="catReview">{cat.skills}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;