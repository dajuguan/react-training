import React, { useEffect } from "react";

export default function RepoMenu({ repos, onSelect = (f) => f }) {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={(f) => f}>&lt;</button>
      <p>{"test"}</p>
      <button onClick={(f) => f}>&gt;</button>
    </div>
  );
}
