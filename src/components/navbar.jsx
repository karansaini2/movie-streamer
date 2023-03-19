import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className=" bg-slate-100 h-12 p-2">
      <nav className="flex justify-evenly items-center space-x-7 sm:space-x-28  ">
        <h2 className="text-2xl font-semibold font-serif xs:text-3xl">
          {" "}
          Streamer
        </h2>

        <ul className="flex space-x-7  sm:space-x-14">
          <li className="text-lg font-serif p-1 hover:bg-violet-500 hover:text-white rounded-lg ">
            <Link to="/"> Home</Link>{" "}
          </li>
          <li className="text-lg font-serif p-1 hover:bg-violet-500 hover:text-white rounded-lg">
            <Link to="/favourites"> Favourites</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
