import React from "react";

const services = [
  { id: 1, img: "/doctor.png", title: "View All Services" },
  { id: 2, img: "/surgery.png", title: "Surgery" },
  { id: 3, img: "/dentist.png", title: "Dentist Visit" },
  { id: 4, img: "/lab.png", title: "Lab Testing" },
];

const ServiceGrid = () => {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <img src={service.img} alt={service.title} />
          <button className="play-btn">▶</button>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;