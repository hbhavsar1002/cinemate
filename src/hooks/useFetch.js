import React, { useEffect, useState } from "react";

export const useFetch = (apiPath, query = "") => {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    process.env.REACT_APP_TMDB_API_KEY
  }${query ? `&query=${query}` : ``}`;

  console.log(url);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }

    fetchMovies();
  }, [url]);

  return { data };
};
