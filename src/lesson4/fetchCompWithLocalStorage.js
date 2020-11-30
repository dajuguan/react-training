import React, { useState, useEffect } from "react";

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GithubUser({ userName }) {
  const [data, setData] = useState(loadJSON(`user:${userName}`));
  useEffect(() => {
    if (!data) return;
    if (data.userName === userName) return;
    const { name, avatar_url } = data;
    saveJSON(`user${userName}`, {
      name,
      avatar_url,
    });
  }, [data]);
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
