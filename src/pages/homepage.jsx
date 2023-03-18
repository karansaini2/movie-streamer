import Navbar from "../components/navbar";
import bg3 from "../assets/bg-3.jpg";
import bg4 from "../assets/bg-4.jpg";
import bg5 from "../assets/bg-5.jpg";
import bg6 from "../assets/bg-6.jpg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const displayMovies = async () => {
    const url = "https://www.omdbapi.com/?s=over&apikey=a753a8d7";
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };

  const getMovies = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=a753a8d7`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    if (!search) {
      displayMovies();
    }
    getMovies(search);
  }, [search]);

  return (
    <section className="bg-gray-700 min-h-screen">
      <Navbar />

      <section className="bg-white flex justify-evenly h-auto">
        <div className="flex flex-col items-center sm:items-start mt-20 md:mt-36 ml-5 ">
          <h1 className=" text-3xl md-text-4xl font-serif font-semibold">
            Best Place{" "}
          </h1>
          <h2 className=" mt-1 text-2xl  md:text-3xl font-serif font-semibold">
            For your Movie needs
          </h2>
          <p className=" hidden text-lg font-serif mt-3 md:text-xl sm:flex">
            One of the best webpage through which one can access all the
          </p>
          <p className=" hidden text-lg font-serif md:text-xl sm:flex ">
            {" "}
            information regarding any movie you want to watch with it's ratings
          </p>
          <p className=" hidden mt-4 text-lg font-serif md:text-xl sm:mt-0 sm:flex">
            {" "}
            Search and get movies as per your interests.
          </p>

          <button className="bg-purple-600 text-center rounded-2xl md:rounded-md text-lg w-52 h-10 lg:w-full text-white my-4 hover:bg-purple-700 mt-5">
            <a href="">Search Movies</a>
          </button>
        </div>
        <div
          style={{
            height: "50vh",
            width: "500px",
            backgroundImage: `url(${bg4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" hidden mt-10 lg:flex "
        ></div>
        <div
          style={{
            height: "50vh",
            width: "400px",
            backgroundImage: `url(${bg6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" hidden mt-10 md:flex lg:hidden "
        ></div>
      </section>
    </section>
  );
};

export default Homepage;
