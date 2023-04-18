import "./App.css";
import { Controls } from "./Controls";
import { Display } from "./Display";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
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
