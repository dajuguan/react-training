import { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> you have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}
