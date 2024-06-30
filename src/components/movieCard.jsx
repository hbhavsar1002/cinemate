import React from "react";
import { Link } from "react-router-dom";
import BackupImage from '../assets/backup.jpg'

export const MovieCard = ({ movie }) => {
  const { id, original_title, title, overview, poster_path } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : BackupImage;

  function isEnglish(text) {
    const englishPattern = /^[A-Za-z0-9\s.,?!:&$@-]+$/;
    return englishPattern.test(text);
  }
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="movie poster" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {isEnglish(original_title) ? original_title : `${original_title}(${title})`}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
