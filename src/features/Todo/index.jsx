import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const inittodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const location = useLocation();
  const [todoList, setTodoList] = useState(inittodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);

    return params.status || "all";
  });

  const handleTotolist = (todo, index) => {
    //clone curent array to the new one
    const newTodoList = [...todoList]; // Tạo 1 mảng sao của todoList để làm việc với dữ liệu mà không làm thay đổi mảng gốc

    console.log(todo, index);

    //toggle state
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    newTodoList[index] = newTodo;

    //update todo list

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilterStatus("new");
  };
  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTotolist} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
