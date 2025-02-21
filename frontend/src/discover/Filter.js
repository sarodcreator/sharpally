import React from "react";

const Filters = ({ jobs, setFilteredJobs }) => {
  const jobCategories = ["All", "Tech", "Healthcare", "Finance", "Marketing", "Education"];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    let filtered = jobs;

    if (name === "location") {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(value.toLowerCase()));
    }
    if (name === "salary") {
      filtered = filtered.filter(job => job.salary && parseInt(job.salary) >= parseInt(value));
    }
    if (name === "skill") {
      filtered = filtered.filter(job => job.title.toLowerCase().includes(value.toLowerCase()));
    }
    if (name === "category" && value !== "All") {
      filtered = filtered.filter(job => job.category && job.category.toLowerCase() === value.toLowerCase());
    }

    setFilteredJobs(filtered);
  };

  return (
    <div>
      <h3>Filter Jobs</h3>
      
      <label>Location:</label>
      <input type="text" name="location" onChange={handleFilterChange} />
      
      <label>Minimum Salary:</label>
      <input type="number" name="salary" onChange={handleFilterChange} />
      
      <label>Skill:</label>
      <input type="text" name="skill" onChange={handleFilterChange} />
      
      <label>Category:</label>
      <select name="category" onChange={handleFilterChange}>
        {jobCategories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;