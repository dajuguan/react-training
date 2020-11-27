import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCoun] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    alert(`You clicked ${count} times`);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCoun(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
