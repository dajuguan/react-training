import React from "react";
import { Fetch } from "./Fetch";
import RepoMenu from "./RepoMenu";
export default function UserRepo({ login, selectedRepo, onSelect = (f) => f }) {
  return (
    <Fetch
      url={`https;//api.github.com/users/{$login}/repos`}
      renderSuccess={({ data }) => {
        <RepoMenu
          repos={data}
          selectedRepo={selectedRepo}
          onSelect={onSelect}
        />;
      }}
    />
  );
}
