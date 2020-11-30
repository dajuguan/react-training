import React, { useReducer } from "react";

import types from "./actionType";
function reset(initialCount) {
  return initialCount;
}

function reducer(count, action) {
  switch (action.type) {
    case types.increment:
      return count + 1;
    case types.decrement:
      return count - 1;
    case types.reset:
      return reset(action.payload);
    default:
      throw new Error();
  }
}
function Counter({ initialCount }) {
  const [count, dispatch] = useReducer(reducer, initialCount, reset);
  return (
    <div>
      Count:{count}
      <button
        onClick={() => dispatch({ type: types.reset, payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: types.increment })}>+</button>
      <button onClick={() => dispatch({ type: types.decrement })}>-</button>
    </div>
  );
}

export default function App() {
  return <Counter initialCount={3} />;
}
