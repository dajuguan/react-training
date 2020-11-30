import React, { useState, useEffect } from "react";

function GithubUser({ userName }) {
  const [data, setData] = useState();
  useEffect(() => {
    if (!userName) return;
    fetch(`https://api.github.com/users/${userName}`)
      .then((resp) => resp.json())
      .then(setData)
      .catch(console.error);
  }, [userName]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return null;
}

export default function App() {
  return <GithubUser userName="dajuguan" />;
}
