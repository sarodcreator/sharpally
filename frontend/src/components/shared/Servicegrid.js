import React from "react";
import Image1 from "../../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
import Image2 from "../../images/thisisengineering-sbVu5zitZt0-unsplash.jpg";
import Image3 from "../../images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg";
import Image4 from "../../images/janis-dzenis-Qk3wDzNKnF0-unsplash.jpg";
import Image5 from "../../images/magnet-me-9rierf0Y-QY-unsplash.jpg";
import Image6 from "../../images/magnet-me-XLN3QibKDm8-unsplash.jpg";
import Image7 from "../../images/nathan-dumlao-QvM7SCMFtVc-unsplash.jpg";
import Image8 from "../../images/possessed-photography-jIBMSMs4_kA-unsplash.jpg";
import Image9 from "../../images/surface-2pZ4nf3KjME-unsplash.jpg";
import Image10 from "../../images/surface-91HFUXYi_Jg-unsplash.jpg";

const ServiceGrid = () => {

  const services = [
  { id: 1, img: Image1, title: "View All Services", size: "xlarge" },
  { id: 2, img: Image2, title: "Surgery", size: "small" },
  { id: 3, img: Image3, title: "Dentist Visit", size: "large" },
  { id: 4, img: Image4, title: "Lab Testing", size: "xlarge" },
  { id: 5, img: Image5, title: "Nursing", size: "xsmall" },
  { id: 6, img: Image6, title: "Hospital Care", size: "small" },
  { id: 7, img: Image7, title: "Pharmacy", size: "xlarge" },
  { id: 8, img: Image8, title: "Radiology", size: "small" },
  { id: 9, img: Image9, title: "Therapy", size: "large" },
  { id: 10, img: Image10, title: "3D Medical Printing", size: "small" },
	  { id: 11, img: Image10, title: "3D Medical Printing", size: "xlarge" },
];

  return (
    <div className="service-grid">
	  <h1 className="service-grid-title">Over 250 jobs from all over the world</h1>
      {services.map((service) => (
        <div
          key={service.id}
          className={`service-card ${service.size}`}
        >
          <img src={service.img} alt={service.title} />
          {service.size === "large" && (
            <button className="play-btn">▶</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
