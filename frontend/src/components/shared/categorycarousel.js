import React from "react";
import "./style.css";


const CategoryCarousel = () => {
  const categories = [
    { name: "Development & IT", rating: "4.85/5", skills: "1853 skills", location:"Hybrid" },
    { name: "AI Services", rating: "4.8/5", skills: "294 skills", location:"Hybrid" },
    { name: "Design & Creative", rating: "4.91/5", skills: "968 skills", location:"Remote" },
    { name: "Sales & Marketing", rating: "4.77/5", skills: "392 skills", location:"On Site" },
    { name: "Writing & Translation", rating: "4.92/5", skills: "505 skills", location:"Remote" }
  ];

  return (
    <div>
      <div className="categorySec">
        <h2 className="cat-heading">Browse talent by category</h2>
        <p className="carousel-body">Need a job? <span className="carousel-body-span">Browse our list</span></p>
       
          <div className="carousel">
            {categories.map((cat, index) => (
              <div key={index}>
                <div className="catReviews">
                  <div className="cat-card">
                    <h3 className="catReview">{cat.name}</h3>
                    <div className="catrew">
                      <p className="catReview-para r">⭐ {cat.rating}</p>
                      <p className="catReview-para s">{cat.skills}</p>
                      <p className="catReview-para l">{cat.location}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              ))}
          </div>
          

      </div>
    </div>
  )
};

export default CategoryCarousel;