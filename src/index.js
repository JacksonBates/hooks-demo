import React, { createContext, useReducer } from "react";
import { render } from "react-dom";

import { Input } from "./Input";
import { Display } from "./Display";

import "./styles/styles.css";

export const AppDispatch = createContext({ value: "" });

// This could be refactored to another file, but I kept it here for simplicity
function reducer(state, action) {
  switch (action.type) {
    case "add_value":
      return { value: action.value };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer);

  return (
    <AppDispatch.Provider value={dispatch}>
      <main>
        <header className="header">Typing Echo Chamber</header>
        <section className="flex-parent">
          <Input state={state} />
          <Display state={state} />
        </section>
      </main>
    </AppDispatch.Provider>
  );
};

render(<App />, document.getElementById("root"));
