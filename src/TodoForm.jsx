import React, { useContext } from "react";
import { StateContext } from "./Context";

export const TodoForm = () => {
  const { dispatch } = useContext(StateContext);

  const onSubmitHandler = event => {
    dispatch({
      type: "ADD",
      payload: event.target[0].value
    });
    event.target[0].value = "";
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" />
      <button type="submit"> add </button>
    </form>
  );
};
