import React from "react";
import "./style.css";

const JobCards = () => {
  return (
    <div className="categorySec cd">
      <div className="job-heading">
        <img src="https://images.app.goo.gl/QEoK2WkQeM7zQAZSA" alt="company image" className="companyLogo"/>
        <div className="company-det">
          <h1>Company Name</h1>
          <p >Country</p>
        </div>
      </div>
      <div className="jobSec">
        <h1>Job Title</h1>
        <p>Job Description</p>
      </div>
      <div className="jobinfo">
        <p className="badge O">Open position</p>
        <p className="badge P">Part time</p>
        <p className="badge R">Remote</p>
      </div>
    </div>
  );
};

export default JobCards;
