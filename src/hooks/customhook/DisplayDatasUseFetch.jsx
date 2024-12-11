import React from "react";
import useFetching from "./useFetching";

const DisplayDatasUseFetch = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, error, loading } = useFetching(url);

  if (loading) {
    return <p>Loading.......</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <div>Data:{data.map((dat)=>(
   <>
    <p>{dat.name}</p>
    <p>{dat.username}</p>
    <p>{dat.phone}</p>
   </>
  ))}</div>;
};

export default DisplayDatasUseFetch;
