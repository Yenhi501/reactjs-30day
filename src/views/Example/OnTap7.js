import React from 'react'
import { useState, useEffect } from 'react'

export const OnTap7 = () => {
    const [job, setJob] = useState()
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const storedJobs = localStorage.getItem('jobs');
        if (storedJobs) {
          setJobs(JSON.parse(storedJobs));
        }
      }, []);
      
    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
      }, [jobs]);

    const handleSubmit = () => {
       setJobs((prev => [...prev, job]))
       setJob('');
    }
    console.log(jobs)
    
  return (
    <div>
        <input value={job} onChange={(event) => setJob(event.target.value)}/>
        <button onClick={handleSubmit}>Add</button>
        <ul>
        {jobs.map((job, index) => (

            <li key ={index}>{job}</li>
        ))}
        </ul>
    </div>
  )
}
