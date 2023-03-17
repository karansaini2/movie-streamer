import { Link } from "react-router-dom";
import bg from "../assets/bg-1.jpg";
import bg1 from "../assets/bg-2.webp";
const Landing = () => {
  return (
    <section className=" text-white flex justify-center items-center  bg-gray-700 min-h-screen space-x-16">
      <div className="flex flex-col justify-center items-center mx-3 lg:items-start">
        <h1 className="text-5xl text-green-400 font-bold mb-4 font-serif lg:text-6xl">
          Welcome to
        </h1>
        <h2 className="text-3xl text-green-400 font-bold mb-4 font-serif lg:text-3xl">
          Movie Streamer
        </h2>

        <div className="mb-2 mt-4 lg:hidden ">
          <img src={bg1} className="rounded-full h-14" />
        </div>

        <p className=" mt-2 hidden text-xl text-center font-serif lg:flex">
          One of the best webpage through which one can access all the
        </p>
        <p className=" hidden text-xl text-center font-serif lg:flex">
          information regarding any movie you want to watch with it's ratings
        </p>
        <p className=" mt-5 text-xl text-center font-serif lg:mt-0">
          Search and get movies as per your interests.
        </p>

        <button className="bg-purple-600 text-center rounded-md text-lg w-80 h-10 lg:w-full text-white my-4 hover:bg-purple-700 mt-5">
          <Link to="/homepage">Get Started</Link>
        </button>
      </div>
      <div className="hidden lg:flex lg:w-1/3  ">
        <img className="h-96 rounded-lg" src={bg} />
      </div>
    </section>
  );
};

export default Landing;
