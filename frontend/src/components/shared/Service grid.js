import React from "react";

const ServiceGrid = () => {

  const services = [
  { id: 1, img: "/doctor.png", title: "View All Services", size: "small" },
  { id: 2, img: "/surgery.png", title: "Surgery", size: "large" },
  { id: 3, img: "/dentist.png", title: "Dentist Visit", size: "small" },
  { id: 4, img: "/lab.png", title: "Lab Testing", size: "small" },
  { id: 5, img: "/nurse.png", title: "Nursing", size: "large" },
  { id: 6, img: "/hospital.png", title: "Hospital Care", size: "small" },
  { id: 7, img: "/medicine.png", title: "Pharmacy", size: "small" },
  { id: 8, img: "/xray.png", title: "Radiology", size: "large" },
  { id: 9, img: "/therapy.png", title: "Therapy", size: "small" },
  { id: 10, img: "/3d-print.png", title: "3D Medical Printing", size: "large" },
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
