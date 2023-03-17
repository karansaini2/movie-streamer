import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className=" bg-slate-100 h-12 p-1">
      <nav className="flex justify-evenly items-center space-x-32  ">
        <h2 className="text-3xl font-semibold font-serif"> Streamer</h2>

        <ul className="flex space-x-11">
          <li>
            <Link to="">
              {" "}
              <i className="fa-solid fa-house-user text-2xl"></i>
            </Link>{" "}
          </li>
          <li>
            <i className="fa-solid fa-star text-2xl"></i>
          </li>
          <li>
            <Link to="/">
              {" "}
              <i className="fa-solid fa-right-from-bracket text-2xl"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
