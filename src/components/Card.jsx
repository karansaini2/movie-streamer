import ReactReadMoreReadLess from "react-read-more-read-less";

const Card = ({ movie, handleFavourite }) => {
  return (
    <div className="flex justify-center">
      <div className="block max-w-[16rem] h-[33.2rem]  rounded-lg  shadow-lg dark:bg-white">
        <a href="#!">
          <img
            className="rounded-t-lg h-[25rem]"
            src={movie.Poster}
            alt="movie"
          />
        </a>
        <div className="py-4 px-5 flex flex-col ">
          <h5 className="text-lg leading-tight  ">
            <ReactReadMoreReadLess
              charLimit={14}
              readMoreText={">>"}
              readLessText={"<<"}
            >
              {movie.Title}
            </ReactReadMoreReadLess>
          </h5>
          <div className="mt-2 text-base space-x-3 ">
            <button className="bg-violet-600 w-[5rem] rounded-lg text-white">
              {movie.Type}
            </button>
            <button className="bg-green-400 w-[5rem] rounded-lg">
              {movie.Year}
            </button>
          </div>
          <button
            type="button"
            className="inline-block rounded mt-2 bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => handleFavourite(movie)}
          >
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
