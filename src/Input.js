import React, { useContext } from "react";

// It is my understanding of context that one should not need
// to import the Context object like this,
// but this only started working when I included the following import:
import { AppDispatch } from "./index";

export const Input = props => {
  const dispatch = useContext(AppDispatch);

  function handleChange() {
    dispatch({ type: "add_value", value: event.target.value });
  }

  return (
    <input className="flex-child" onChange={handleChange} value={props.value} />
  );
};

export default Input;
