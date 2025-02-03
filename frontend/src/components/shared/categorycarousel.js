import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Development & IT", rating: "4.85/5", skills: "1853 skills" },
  { name: "AI Services", rating: "4.8/5", skills: "294 skills" },
  { name: "Design & Creative", rating: "4.91/5", skills: "968 skills" },
  { name: "Sales & Marketing", rating: "4.77/5", skills: "392 skills" },
  { name: "Writing & Translation", rating: "4.92/5", skills: "505 skills" }
];

const CategoryCarousel = () => {
  return (
    <div className="w-full max-w-xl mx-auto my-20">
      <h2 className="text-xl font-bold text-center mb-6">Browse talent by category</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 border rounded-lg shadow-md text-center bg-white">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-600">⭐ {cat.rating}</p>
              <p className="text-sm text-gray-500">{cat.skills}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;