import "./App.css";
import React from "react";

type ControlsType = {
  decrement: () => void;
  increment: () => void;
  reset: () => void;
};
function Controls(props: ControlsType) {
  return (
    <div className="button">
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
}

export default Controls;
