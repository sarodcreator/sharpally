import React from "react";

const TestimonialCard = ({ name, role, text, rating, img }) => {
  return (
    <div className="testimonial-card">
      <p id="rate">{text}</p>
      {rating && <p aria-label={`Rating: ${rating} stars`}>⭐ {rating}</p>}
	  <div className="reviewfrom">
	      <img src={img} alt="profile" id="reviewer"/>
	      <div>
	          <h4 id="rev-name">{name}</h4>
	          <p id="role">{role}</p>
	      </div>    
	  </div>
    </div>
  );
};

export default TestimonialCard;
