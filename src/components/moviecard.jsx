import React, { useState } from "react";

const MovieCard = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="  mt-5 w-64   rounded-lg  shadow-2xl hover:-translate-y-3 ease-in-out duration-300   "
          key={index}
        >
          <div className="flex flex-col cursor-pointer  ">
            <img
              src={movie.Poster}
              className="h-72 w-full rounded-md"
              alt="movie"
            ></img>
            <div className="p-2 ">
              <h1 className="font-serif">{movie.Title}</h1>
              <p className=" font-serif mt-2 mb-1 bg-purple-600 text-white inline-block w-28  rounded-lg text-center ">
                {movie.Year}
              </p>

              <p className=" font-serif ml-2 text-white bg-green-600 inline-block w-24 rounded-lg text-center">
                {movie.Type}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
