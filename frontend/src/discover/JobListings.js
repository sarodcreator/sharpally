import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import JobAlerts from "./JobAlerts";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("savedJobs")) || [];
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  // Fetch jobs dynamically from API
  const fetchJobs = async () => {
    try {
      const response = await fetch("https://api.indeed.com/v2/search?q=high-demand jobs&location=remote&limit=20&apikey=YOUR_API_KEY");
      const data = await response.json();
      
      // Add a category field based on job title
      const categorizedJobs = data.results.map(job => ({
        ...job,
        category: categorizeJob(job.title)
      }));

      setJobs(categorizedJobs);
      setFilteredJobs(categorizedJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Categorize jobs
  const categorizeJob = (title) => {
    if (title.toLowerCase().includes("developer") || title.toLowerCase().includes("engineer")) return "Tech";
    if (title.toLowerCase().includes("nurse") || title.toLowerCase().includes("doctor")) return "Healthcare";
    if (title.toLowerCase().includes("finance") || title.toLowerCase().includes("accountant")) return "Finance";
    if (title.toLowerCase().includes("marketing") || title.toLowerCase().includes("sales")) return "Marketing";
    if (title.toLowerCase().includes("teacher") || title.toLowerCase().includes("education")) return "Education";
    return "Other";
  };

  // Save/Unsave Jobs
  const toggleSaveJob = (job) => {
    const isSaved = savedJobs.some(savedJob => savedJob.id === job.id);
    if (isSaved) {
      setSavedJobs(savedJobs.filter(savedJob => savedJob.id !== job.id));
    } else {
      setSavedJobs([...savedJobs, job]);
    }
  };

  return (
    <div>
      <h2>High-Demand Job Listings</h2>
      <Filters jobs={jobs} setFilteredJobs={setFilteredJobs} />

      {/* Display Jobs */}
      <ul>
        {filteredJobs.map((job, index) => (
          <li key={index}>
            <a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a>
            <p>{job.location} | {job.salary ? `$${job.salary}` : "Salary not disclosed"} | {job.category}</p>
            <button onClick={() => toggleSaveJob(job)}>
              {savedJobs.some(savedJob => savedJob.id === job.id) ? "Unsave" : "Save"}
            </button>
          </li>
        ))}
      </ul>

      {/* View Saved Jobs */}
      <h3>Saved Jobs</h3>
      <ul>
        {savedJobs.length > 0 ? (
          savedJobs.map((job, index) => (
            <li key={index}>
              <a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a>
              <button onClick={() => toggleSaveJob(job)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No saved jobs yet.</p>
        )}
      </ul>

      {/* Job Alerts */}
      <JobAlerts />
    </div>
  );
};

export default JobListings;