import React from 'react'

const filterData = [
  {
    filterType: "Location",
    array: ["Lagos", "Rivers", "Abuja", "Enugu", "Cross River", "Ondo", "Kaduna"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend developer", "Fullstack developer", "Product Designer", "Visual Assistant", "Data Analyst", "Software Engineer"]
  },
  {
    filterType: "workType",
    array: ["Remote", "On-site", "Hybrid"]
  }
]
const filter = () => {
  return (
    <div>
      <h1>Filter Jobs</h1>
    </div>
  )
}

export default filter