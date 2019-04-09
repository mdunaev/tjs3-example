import React, { useContext } from "react";
import { StateContext } from "./Context";

export const TodoListItem = ({ text }) => {
  const { dispatch } = useContext(StateContext);

  const removeClickHandler = () =>
    dispatch({
      type: "REMOVE",
      payload: text
    });

  return (
    <li>
      {text}
      <button onClick={removeClickHandler}>
        ×
      </button>
    </li>
  );
};
