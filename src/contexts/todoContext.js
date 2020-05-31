import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("react-todo");
    data ? setTodos(JSON.parse(data)) : setTodos([]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("react-todo", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id.toString() === id.toString()
          ? { ...todo, done: !todo.done }
          : todo
      )
    );

  const addTodo = (task) => {
    if (!task) return;
    setTodos([...todos, { id: uuid(), done: false, task }]);
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id.toString() !== id.toString()));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, delTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
