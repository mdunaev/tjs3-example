import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { StateProvider } from "./Context";

export const App = () => (
  <StateProvider>
    <div>
      <TodoForm />
      <TodoList />
    </div>
  </StateProvider>
);
