import React from 'react';
import { FaSearch } from 'react-icons/fa';

const filterData = [
  {
    filterType: "Location",
    array: ["Lagos", "Rivers", "Abuja", "Enugu", "Cross River", "Ondo", "Kaduna"]
  },
  {
    filterType: "Job Type",
    array: ["Frontend Developer", "Backend developer", "Fullstack developer", "Product Designer", "Visual Assistant", "Data Analyst", "Software Engineer"]
  },
  {
    filterType: "Work Type",
    array: ["Remote", "On-site", "Hybrid"]
  }
]
const filter = () => {
  return (
    <div>
      <h1 className="filtersec-heading">Filter Jobs</h1>
      <div className="filter-search">
        <input type="text" placeholder="Location, jobs, type" />
        <button><FaSearch /></button>
      </div>
      <div>
        {
          filterData.map((data, index) => (
            <div key={index} className="filterType">
              <h2>{data.filterType}</h2>
              {data.array.map((item, value) => (
                <div key={value} className="filteritem">
                  <input type="checkbox" id={item} name={data.filterType} value={item} />
                  <label htmlFor={item}>{item}</label>
                </div>

              ))}
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default filter