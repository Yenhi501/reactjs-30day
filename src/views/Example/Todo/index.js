import React, { useReducer, useRef } from "react";
import reducer from "react";
import { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";

const Video46 = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handlSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  const handleDelete = (index) => {
    dispatch(deleteJob(index));
  };
  return (
    <div>
      <h3>Todo</h3>
      <br />
      <input
        ref={inputRef}
        value={job}
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handlSubmit}>Add</button>
      <br />
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <span onClick={() => handleDelete(index)}> &times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Video46;
