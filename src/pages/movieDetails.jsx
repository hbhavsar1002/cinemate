import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BackupImage from "../assets/backup.jpg";
import { useTitle } from "../hooks/useTitle";

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : BackupImage;

  function minutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    
    const monthName = months[monthIndex];
    
    return `${day} ${monthName} ${year}`;
  }

  useTitle(movie.title)

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, []);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-xs">
          <img className="rounded-lg" src={image} alt="movie poster" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-3xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4 text-left">{movie.overview}</p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border-2 border-gray-200 rounded-lg dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-500 dark:text-yellow-400 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">
              {movie.vote_average}{" "}
              <span className="text-gray-500 text-xl">/10</span>
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900  dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-semibold">Runtime:</span>
            <span>{minutesToHoursAndMinutes(movie.runtime)}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-semibold">Released:</span>
            <span>{formatDate(movie.release_date)}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-semibold">IMDB code:</span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>{movie.imdb_id}</span>
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
