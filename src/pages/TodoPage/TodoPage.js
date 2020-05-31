import React, { useState, useContext } from "react";
import "./TodoPage.css";

import { Input, Button, TodoList } from "../../components";
import { TodoContext } from "../../contexts";

export const TodoPage = () => {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  return (
    <div className="todo-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = todo;
          addTodo(newTodo);
          setTodo("");
        }}
      >
        <Input
          placeholder="Type something to add..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          autoComplete="off"
          autoFocus
        />
        <Button type="submit">ADD</Button>
      </form>
      <TodoList
        todos={[
          { task: "Play Game", done: false },
          { task: "Watch TV", done: true },
          { task: " Sleeping", done: false },
        ]}
      />
    </div>
  );
};
