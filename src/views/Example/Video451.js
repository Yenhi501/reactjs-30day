import React, { useReducer, useRef } from "react";
const initState = {
  job: "",
  jobs: [],
};
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
const reducer = (state, action) => {
  let newState = null;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newjobs = [...state.jobs];
      newjobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newjobs,
      };
      break;
    default:
      throw new Error("Error");
  }
  return newState;
};

const Video451 = (props) => {
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

export default Video451;
