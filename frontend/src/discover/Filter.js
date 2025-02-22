import React, { useState, useEffect } from "react";

const Filter = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://remotive.io/api/remote-jobs/categories")
      .then(response => response.json())
      .then(data => setCategories(data.jobs))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <label>Select Job Category:</label>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;