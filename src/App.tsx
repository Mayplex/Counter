import "./App.css";
import React from "react";
import { useState } from "react";
import Display from "./Display";
import Controls from "./Controls";

function App() {
  const [count, setCount] = useState<number>(0);
  function Increment() {
    if (count <= 4) setCount(count + 1);
  }
  function Reset() {
    setCount(0);
  }
  function Decrement() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <Display count={count} />
      <Controls increment={Increment} reset={Reset} decrement={Decrement} />
    </div>
  );
}

export default App;
