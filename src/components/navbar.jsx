import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className=" bg-slate-100 h-12 p-2">
      <nav className="flex justify-evenly items-center space-x-10 sm:space-x-28  ">
        <h2 className="text-2xl font-semibold font-serif xs:text-3xl">
          {" "}
          Streamer
        </h2>

        <ul className="flex space-x-7  sm:space-x-14">
          <li>
            <Link to="/">
              {" "}
              <i className="fa-solid fa-house-user  text-lg xs:text-xl sm:text-2xl"></i>
            </Link>{" "}
          </li>
          <li>
            <Link to="/favourites">
              {" "}
              <i className="fa-solid fa-star  text-lg xs:text-xl sm:text-2xl"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
