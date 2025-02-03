import React from "react";
import LatestJobCards from "./LatestJobCards";
import 'style.css';

const randomJobs = [1,2,3,4,5,6,7,8,9];

const LatestJobs = () => {
    return (
<div className="latestJobSec">
<h1 className='LatestJobTitle'>Latest and Top<span className="listings">job listings</span></h1>
<div className="cards">
{randomJobs.slice(0,6).map(item, index)=> <LatestJobCards />}
</div>
</div>
)
}
