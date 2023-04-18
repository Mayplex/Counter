import React from "react";

type CountType = {
  count: number;
};

function Display(props: CountType) {
  return (
    <div>
      <h1>Counter</h1>
      <h2 className={props.count === 5 ? "five-red" : ""}>{props.count}</h2>
    </div>
  );
}

export default Display;
