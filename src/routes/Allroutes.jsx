import { Routes, Route } from "react-router-dom";
import { MovieList, Search, MovieDetails, PageNotFound } from "../pages";

import React from "react";

export const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <main>
        <Routes>
          <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" title="Popular Movies"/>} />
          <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated Movies"/>} />
          <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming Movies"/>} />
          <Route path="/search" element={<MovieList apiPath="search/movie" title="Search result for"/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};
