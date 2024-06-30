import React, { useEffect } from "react";
import PageNotFoundImage from "../assets/space.png";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  
  useTitle('Page Not Found')

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-3">
        <p className="capitalize text-gray-900 dark:text-white text-3xl font-semibold">
            Opps! Page not found
          </p>
          <div className="max-w-md">
            <img src={PageNotFoundImage} alt="page not found image" />
          </div>

        </div>
        <div className="flex justify-center my-4">
          <Link to='/'>
          <button className="w-64 text-xl text-gray-900 dark:text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-5 py-2.5 hover:from-pink-500 hover:to-yellow-500 dark:hover:text-gray-900 hover:text-white">Back to Cinemate</button>
          </Link>
          
        </div>
      </section>
    </main>
  );
};
