import React, { useContext } from "react";
import { TodoListItem } from "./TodoListItem";
import { StateContext } from "./Context";

export const TodoList = () => {
  const { state } = useContext(StateContext);
  return (
    <ul>
      {state.todos.map((todo, i) => (
        <TodoListItem text={todo} key={i} />
      ))}
    </ul>
  );
};
