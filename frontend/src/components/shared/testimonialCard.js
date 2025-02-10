import React from "react";

const TestimonialCard = ({ name, role, text, rating }) => {
  return (
    <div className="testimonial-card">
      <p id="rate">{text}</p>
      {rating && <p aria-label={`Rating: ${rating} stars`}>⭐ {rating}</p>}
      <h4 id="rev-name">{name}</h4>
      <p id="role">{role}</p>
    </div>
  );
};

export default TestimonialCard;
