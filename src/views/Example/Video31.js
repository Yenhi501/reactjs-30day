import React from 'react'
import { useState } from 'react'

export const Video31 = () => {
    const [job, setJob] = useState('');
    const [jobs, setJobs] =useState([]);
    
    const handleSubmit = () => {
        setJobs((prev) => [...prev, job])

    }
  return (
    <div>
        <input value ={job} onChange={(event) => setJob( event.target.value)} />
        <button onClick={handleSubmit}>Add</button>
        <ul>
        {jobs.map((job, index) => (
            <li key ={index}>{job}</li>
        ))}
        </ul>
    </div>
  )
}
