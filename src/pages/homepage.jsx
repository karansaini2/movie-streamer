import Navbar from "../components/navbar";
import bg3 from "../assets/bg-3.jpg";
import { useState, useEffect } from "react";

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
      <section
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          opacity: "50%",
        }}
      ></section>
    </section>
  );
};

export default Homepage;
