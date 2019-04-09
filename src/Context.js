import React, { useReducer } from "react";

const initialState = {
  todos: ["first", "second", "third"]
};

export const StateContext = React.createContext(
  initialState
);

const reducers = (state, action) => {
  const { todos } = state;
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...todos, action.payload]
      };
    case "REMOVE":
      return {
        ...state,
        todos: todos.filter(
          val => val !== action.payload
        )
      };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducers,
    initialState
  );

  return (
    <StateContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </StateContext.Provider>
  );
};
