import "./App.css";
export function Controls(props) {
  return (
    <div className="button">
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
}
