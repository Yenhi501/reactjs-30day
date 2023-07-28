import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classnames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  // ít
  // const {} = props; nhiều
  const handleTotolist = (todo, index) => {
    if (!onTodoClick) return;

    onTodoClick(todo, index);
  };
  return (
    <div>
      <ul className="todolist">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={classnames({ completed: todo.status === "completed" })}
            onClick={() => handleTotolist(todo, index)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
