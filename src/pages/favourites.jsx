import MovieCard from "../components/moviecard";
import Navbar from "../components/navbar";
import { useMovies } from "../contexts/MovieContext";
import RemoveFavourite from "../components/removeFavourite";
import Footer from "../components/footer";

const Favourites = () => {
  const { favourites, movie } = useMovies();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="mt-3">
        <h1 className="text-center text-4xl font-serif font-semibold">
          Favourite Movies
        </h1>
      </div>

      <div className="flex flex-col flex-wrap mt-5  space-x-8 justify-center items-center md:flex-row ">
        <MovieCard moviestoShow={favourites} />
      </div>
    </>
  );
};

export default Favourites;
