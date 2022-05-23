import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div>

    <header className="border-b border-gray-100 ">
    <div
      className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
    >
      <div className="flex items-center">
        <button type="button" className="p-2 sm:mr-4 lg:hidden">
         
        </button>
  
        <Link to="/" className="flex">
          
          <img
            src={logo} className= "h-10"
          />
        </Link>
      </div>
  
      <div className="flex items-center justify-end flex-1">
        <nav
          className="hidden lg:uppercase lg:text-black-500 lg:tracking-wide lg:font-bold lg:text-m lg:space-x-4 lg:flex"
        >
          <Link
            to="/about"
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
  
          <a
            href="/contact"
            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
          >
            Collabs
          </a>
        </nav>
  
        <div className="flex items-center ml-8">
          <div
            className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
          >
            
            <span className="hidden sm:block">
              <a
                href="/search"
                className="block p-6 border-b-4 border-transparent hover:border-red-700"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
  
                <span className="sr-only"> Search </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  </div>
  );
}
