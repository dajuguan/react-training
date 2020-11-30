import React from "react";
import faker from "faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
}));

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const renderIterm = (item) => (
    <div style={{ display: "flex" }}>
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );
  return <List data={bigList} renderItem={renderIterm} />;
}
