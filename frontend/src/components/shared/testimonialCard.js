import React from "react";

const TestimonialCard = ({ name, role, text, rating }) => {
  return (
    <div className="testimonial-card">
      <p>{text}</p>
      {rating && <p aria-label={`Rating: ${rating} stars`}>⭐ {rating}</p>}
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
};

export default TestimonialCard;