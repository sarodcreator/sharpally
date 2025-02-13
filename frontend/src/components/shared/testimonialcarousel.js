import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./testimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Image1 from '../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import Image2 from '../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import Image3 from '../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import Image4 from '../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';

const testimonials = [
  {
    name: "Jenna Milton",
    role: "New Visit Medical Center",
    text: "The cosmetician isn’t just about enhancing beauty, but crafting confidence.",
	  rating: 4.8,
	  img: Image1,
  },
  {
    name: "Maria Reed",
    role: "Medical Center Patient",
    text: "In the realm of care, my doctor here isn’t just a practitioner; they’re a guardian of health.",
    rating: 4.2,
	  img: Image2,
  },
  {
    name: "Michale Miller",
    role: "Brunch 047",
    text: "Trust isn’t given; it’s earned. And my surgeon here didn’t just earn my trust, but my admiration.",
	  rating: 3.9,
	  img: Image3,
  },
  {
    name: "Sharon Roberts",
    role: "Dentist Visit",
    text: "My dental clinician isn’t just about fixing smiles; it’s about creating them.",
	  rating: 4.2,
	  img: Image4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <Slider {...settings}>  {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
