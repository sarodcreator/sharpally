import React from "react";

const ServiceGrid = () => {

  const services = [
  { id: 1, img: "../../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg", title: "View All Services", size: "small" },
  { id: 2, img: "../../images/thisisengineering-sbVu5zitZt0-unsplash.jpg", title: "Surgery", size: "large" },
  { id: 3, img: "../../images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg", title: "Dentist Visit", size: "small" },
  { id: 4, img: "../../images/janis-dzenis-Qk3wDzNKnF0-unsplash.jpg", title: "Lab Testing", size: "small" },
  { id: 5, img: "../../images/magnet-me-9rierf0Y-QY-unsplash.jpg", title: "Nursing", size: "large" },
  { id: 6, img: "../../images/magnet-me-XLN3QibKDm8-unsplash.jpg", title: "Hospital Care", size: "small" },
  { id: 7, img: "../../images/nathan-dumlao-QvM7SCMFtVc-unsplash.jpg", title: "Pharmacy", size: "small" },
  { id: 8, img: "../../images/possessed-photography-jIBMSMs4_kA-unsplash.jpg", title: "Radiology", size: "large" },
  { id: 9, img: "../../images/surface-2pZ4nf3KjME-unsplash.jpg", title: "Therapy", size: "small" },
  { id: 10, img: "../../images/surface-91HFUXYi_Jg-unsplash.jpg", title: "3D Medical Printing", size: "large" },
];

  return (
    <div className="service-grid">
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
