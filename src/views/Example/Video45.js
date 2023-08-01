import React, { useRef, useState } from "react";

const Video45 = (props) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAdd = () => {
    setTodos([...todos, { todo }]);
    setTodo("");
    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    const newtodo = [...todos];
    newtodo.splice(index, 1);
    setTodos(newtodo);
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={todo}
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <br />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.todo} <span onClick={() => handleDelete(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Video45.propTypes = {};

export default Video45;
