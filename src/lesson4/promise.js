import React, { useState, useEffect } from "react";

function GithubUser({ userName }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!userName) return;
    fetch(`https://api.github.com/users/${userName}`)
      .then((resp) => resp.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [userName]);

  if (loading) return <h1>loading ...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 1)}</pre>;
  if (!data) return null;
  return (
    <div className="user">
      <img src={data.avatar_url} alt={userName} style={{ width: 200 }} />
      <div>
        <h1>{data.name}</h1>
      </div>
    </div>
  );
}

export default function App() {
  return <GithubUser userName="dajuguan" />;
}
