import React from "react";
import "./index.css";
import Header from "../components/shared/navbar.js";
import HeroSection from "../components/shared/herosection.js";
import CategorySec from "../components/shared/categorycarousel.js";
import LatestJobs from "../components/shared/latestjobs.js";
import Testimonials from "../components/shared/testimonialcarousel.js";
import ServiceGrid from "../components/shared/Servicegrid.js";

const index = () => {
  return (
    <div className="body">
      <Header />
      <HeroSection />
      <CategorySec />
      <LatestJobs />
      <Testimonials />
      <ServiceGrid />
    </div>
  );
};

export default index;
