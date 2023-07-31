import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TodoList from "./components/TodoList";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// Supports weights 100-900
import "@fontsource/noto-sans-jp";
import TodoForm from "./components/TodoForm";
import "./style.scss";
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

  // const history = useHistory();
  // const match = useRouteMatch();
  const location = useLocation();
  const [todoList, setTodoList] = useState(inittodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log(params);

    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    // console.log(params);

    setFilterStatus(params.status || "all");
  }, [location.search]);

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
    // const queyryParams = { status: "all" };
    // history.push({
    //   pathname: match.path,
    //   search: queryString.stringify(queyryParams),
    // });
  };

  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
    // const queyryParams = { status: "completed" };
    // history.push({
    //   pathname: match.path,
    //   search: queryString.stringify(queyryParams),
    // });
  };

  const handleShowNewClick = () => {
    setFilterStatus("new");
    // const queyryParams = { status: "new" };
    // history.push({
    //   pathname: match.path,
    //   search: queryString.stringify(queyryParams),
    // });
  };
  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  const handleTodoFormSubmit = (values) => {
    console.log("Form submit: ", values);

    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div className="container">
      <h3> What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
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
