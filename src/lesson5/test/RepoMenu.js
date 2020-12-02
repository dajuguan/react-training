import React, { useEffect } from "react";
import { useIterator } from "./hooks/index"

export default function RepoMenu({ repos, onSelect = (f) => f }) {
  const [{ name }, previous, next] = useIterator(repos)
  return (
    <div style={{ display: "flex" }}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
}



