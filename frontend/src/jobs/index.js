import './index.css';
import React from 'react';
import Navbar from '../components/shared/navbar';
import Filter from '../components/shared/filter';
import Jobscard from '../components/shared/filter';

const index = () => {

    const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
        <Navbar />
        {/*filter section*/}
        <div className='filter-sec'>
              <Filter />
        </div>
        {/*job card*/}
        {
            jobsArray.length <= 0 ? <span>Job not found</span> : (
                <div className="job-cards">
                    {
                        jobsArray.map((item, index) => 
                        <div>
                            <Jobscard />
                        </div>)
                    }
                </div>
            )
        }
    </div>
  )
}

export default index;