import { Link } from "react-router-dom";
import me2 from "../assets/me2.png";

export default function Navbar() {
  return ( 
    <div>
      <header className="border-b border-gray-100 ">
        <div className="flex items-center justify-between h-20 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="flex mx-auto">
            <Link to="/" className="flex">
              <img alt="me" src={me2} className="h-10" />
            </Link>
          </div>

          <div className="flex items-center justify-end flex-1">
            <nav className="hidden  lg:text-black-500 lg:tracking-wide lg:font-bold lg:text-xl lg:space-x-4 lg:flex">
              <Link
                to="/aboutme"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                About Me
              </Link>

              <Link
                to="/resources"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                Resources
              </Link>

              <a
                href="/products"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                Products
              </a>

              <Link
                to="/collabs"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                Collabs
              </Link>
            </nav>

            <div className="flex items-center ml-8">
              <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
