import React, { useState } from 'react'

export const Video31_1 = () => {
    const storageJob = JSON.parse(localStorage.getItem('myJob'));
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(storageJob ?? []);


    const handleSubmit = () => {
      setJobs(prev => {
        const newJobs = [...prev, job]

        // Save to local storage
        const jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('myjob', jsonJobs)
        
        return newJobs;
      })
      setJob('');
    }
    console.log(jobs)

  return (
    <div>
        <input value={job} onChange={(e) => setJob(e.target.value)}/>
        <button onClick={handleSubmit}>Add</button>

        <ul>
        {jobs.map((job1, index) => (
            <li key={index}>{job1}</li>

        ))}
        </ul>
    </div>
  )
}
