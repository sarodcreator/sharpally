import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import JobAlerts from "./JobAlerts";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedJobs, setAppliedJobs] = useState(
    JSON.parse(localStorage.getItem("appliedJobs")) || []
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://remotive.io/api/remote-jobs")
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  // Filter jobs based on search term and category
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "" || job.category === selectedCategory)
  );

  // Handle Job Application
  const handleApply = (job) => {
    window.open(job.url, "_blank");

    if (!appliedJobs.some(appliedJob => appliedJob.id === job.id)) {
      const updatedAppliedJobs = [...appliedJobs, job];
      setAppliedJobs(updatedAppliedJobs);
      localStorage.setItem("appliedJobs", JSON.stringify(updatedAppliedJobs));
    }
  };

  return (
    <div>
      <h2>Remote Job Listings</h2>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Job Category Filter */}
      <Filter setSelectedCategory={setSelectedCategory} />

      <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              <h3>{job.title} at {job.company_name}</h3>
            </a>
            <p>{job.salary ? job.salary : "Salary not disclosed"}</p>
            <p>Location: {job.candidate_required_location}</p>

            {appliedJobs.some(appliedJob => appliedJob.id === job.id) ? (
              <button disabled style={{ backgroundColor: "gray" }}>Applied</button>
            ) : (
              <button onClick={() => handleApply(job)}>Apply Now</button>
            )}
          </li>
        ))}
      </ul>

      {/* Applied Jobs Section */}
      <h2>Applied Jobs</h2>
      {appliedJobs.length > 0 ? (
        <ul>
          {appliedJobs.map(job => (
            <li key={job.id}>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                {job.title} at {job.company_name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applied jobs yet.</p>
      )}

      {/* Job Alerts Section */}
      <JobAlerts />
    </div>
  );
};

export default JobListings;