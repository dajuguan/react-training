import React from "react";

export function Fetch({
  url,
  renderSuccess,
  loadingFallBack = <p>loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = {
    loading: true,
    data: { name: "chen" },
    error: null,
  };
  if (loading) return loadingFallBack;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
