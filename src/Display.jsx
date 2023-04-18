export function Display({ count }) {
  return (
    <div>
      <h1>Counter</h1>
      <h2 className={count === 5 ? "five-red" : ""}>{count}</h2>
    </div>
  );
}
