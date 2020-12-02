import React from "react";
import { useFetch } from "./hooks"

export function Fetch({
  url,
  renderSuccess,
  loadingFallBack = <p>loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  console.log(url)
  const { loading, data, error } = useFetch(url);
  console.log("get data:", data)
  if (loading) return loadingFallBack;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
