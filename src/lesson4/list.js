import React from "react";

const listData = [
  { name: "chen", score: 100 },
  { name: "test1", score: 90 },
  { name: "hhh", score: 80 },
  { name: "11111", score: 60 },
];

function List({ data = [], renderEmpty, renderItem }) {
  if (!data.length) return renderEmpty;
  return (
    <ul>
      {listData.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <List
      data={listData}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <h1>
          {item.name} * {item.score} .....
        </h1>
      )}
    />
  );
}
