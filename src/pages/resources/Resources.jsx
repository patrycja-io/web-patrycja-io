import React from 'react'
import {Link} from "react-router-dom"

export default function Resources() {
  return (
    <section className="text-white font-mono bg-indigo-600">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
           Explore for free <br />
          </h2>

          <p className="mt-4 text-white">
            Choose category of your intrest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 text-black">
          <div className="p-1 shadow-xl bg-gradient-to-r from-orange-500 via-rose-600 to-indigo-600 rounded-2xl">
            <Link
              className="block p-8 transition border bg-white sm:p-8  shadow-xl rounded-xl hover:shadow-pink-500/20 hover:border-pink-500/20"
              to="reactlibraries"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h5 className="mt-2 text-xl font-bold text-black">
                React Libraries A-Z
              </h5>
              <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
          React
        </p>
        <ul className="flex space-x-1">
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Snippet
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Info
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Tip
          </li>
        </ul>
      </div>
            </Link>
          </div>
          <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
            <Link
              className="block p-8 transition border bg-white sm:p-8  shadow-xl rounded-xl hover:shadow-pink-500/20 hover:border-pink-500/20"
              to="reactlibraries"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h5 className="mt-2 text-xl font-bold text-black">
                React Hooks A-Z
              </h5>
              <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
         React
        </p>
        <ul className="flex space-x-1">
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Snippet
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Info
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Tip
          </li>
        </ul>
      </div>
            </Link>
          </div>
          <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
            <Link
              className="block p-8 transition border bg-white sm:p-8  shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              to="reactlibraries"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h5 className="mt-2 text-xl font-bold text-black">
                Tailwind UI - all available
              </h5>
              <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          Rails
        </p>
        <ul className="flex space-x-1">
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Snippet
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Info
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Tip
          </li>
        </ul>
      </div>
            </Link>
          </div>
          <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
            <Link
              className="block p-8 transition border bg-white sm:p-8  shadow-xl rounded-xl hover:shadow-pink-500/20 hover:border-pink-500/20"
              to="reactlibraries"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h5 className="mt-2 text-xl font-bold text-black">
                 Cool Github Repos
              </h5>
              <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          Github
        </p>
        <ul className="flex space-x-1">
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Snippet
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Info
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Tip
          </li>
        </ul>
      </div>
            </Link>
          </div>
          <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
            <Link
              className="block p-8 transition border bg-white sm:p-8  shadow-xl rounded-xl hover:shadow-pink-500/20 hover:border-pink-500/20"
              to="reactlibraries">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h5 className="mt-2 text-xl font-bold text-black">
                Roadmaps
              </h5>
              <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          Rails
        </p>
        <ul className="flex space-x-1">
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Snippet
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Info
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Tip
          </li>
        </ul>
      </div>
            </Link>
          </div>
          <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
            <Link
              className="block p-8 transition border bg-white sm:p-8  shadow-xl rounded-xl hover:shadow-pink-500/20 hover:border-pink-500/20"
              to="reactlibraries"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h5 className="mt-2 text-xl font-bold text-black">
        React and Javascript Games
      </h5>
      <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          Rails
        </p>
        <ul className="flex space-x-1">
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Snippet
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Info
          </li>
          <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
            Tip
          </li>
        </ul>
      </div>
            </Link>
          </div>
        </div>

        
      </div>
    </section>
  );
}
