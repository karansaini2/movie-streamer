import React, { useState } from "react";
import { useMovies } from "../contexts/MovieContext";
import AddFavourite from "./addFavourite";
import Card from "./Card";
import RemoveFavourite from "./removeFavourite";

const MovieCard = ({ moviestoShow }) => {
  const { favourites, setFavourites } = useMovies();

  const handleFavourite = (movie) => {
    let newFavourites = [];
    if (favourites.includes(movie)) {
      newFavourites = favourites.filter((_movie) => _movie !== movie);
    } else {
      newFavourites = [...favourites, movie];
    }
    setFavourites(newFavourites);
  };

  return (
    <>
      {moviestoShow.map((movie) => {
        return (
          <Card
            key={movie.imdbID}
            movie={movie}
            handleFavourite={handleFavourite}
          />
        );
      })}
    </>
  );
};

export default MovieCard;
