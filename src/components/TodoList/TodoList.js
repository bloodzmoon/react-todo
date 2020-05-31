import React, { useContext } from "react";
import "./TodoList.css";

import { TodoContext } from "../../contexts";

export const TodoList = () => {
  const { todos, delTodo, toggleTodo } = useContext(TodoContext);

  return (
    <div className="todo-list">
      <h3 className="todo-title">TODO LIST</h3>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.done && "done"}`}
          data-value={todo.id}
          onClick={(e) => toggleTodo(e.target.dataset.value)}
        >
          {todo.task}
          <span
            className="del"
            data-value={todo.id}
            onClick={(e) => {
              e.stopPropagation();
              delTodo(e.target.dataset.value);
            }}
          >
            DEL
          </span>
        </div>
      ))}
    </div>
  );
};
