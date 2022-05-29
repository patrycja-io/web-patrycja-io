import { Link } from "react-router-dom";
import me from "../../assets/me.jpg";
import keyboard from "../../assets/keyboard.jpg";
import levi from "../../assets/levi-guzman.jpg";

export default function Create() {
  return (
    <div>

<main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden ">
    <div className="flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
            <input type="imgage"src={me} className="rounded-full w-28 mx-auto"/>
                <p className="text-3xl my-6 text-center dark:text-white">
                    Hi, I&#x27;m Patrycja 🤘
                </p>
                <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                    Sharing free resources,  building digital products,  and experiences.
                </h2>
                <div className="flex items-center justify-center mt-4">
                    <Link to="aboutme" className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent rounded-lg dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                        CONNECT WITH ME
                    </Link>
                </div>
            </div>
        </div>
    </div>
</main>

<aside>
  <div className="px-4 py-16  font-mono mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="p-8 text-center text-white bg-indigo-600 sm:col-span-2 sm:p-16 lg:py-24">
        <div className="max-w-lg mx-auto space-y-8">
        <p className="text-3xl font-bold sm:text-4xl">
           Coding is for everyone!
          </p>
          

          <p className="text-xl">
            Explore FREE resources that will help ypu to learn and implement better code <code className=""> </code>
          </p>

          <Link
            to="aboutme"
            className="inline-flex items-center px-5 py-3 mt-8 font-medium text-indigo-600 bg-white rounded-lg hover:opacity-75"
          >
            Come and see

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-4 h-4 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative h-64 lg:order-first lg:h-full">
        <img
          src={levi}
          alt="Sunset with palm trees"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="relative h-64 lg:h-full">
        <img
          src={keyboard}
          alt="Man in a hat and yellow jumper"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</aside>
<section className="text-black  font-mono bg-neuatral-50">
  <div className="max-w-screen-2xl px-20 py-20 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl py-20">
      <h2 className="text-4xl font-bold sm:text-7xl">
       Database is going to be even bigger. But for now...
      </h2>

      <p className="mt-4 sm:text-xl">
       This is only half of things that you can find here
      </p>
    </div>

    <ul className="grid grid-cols-1 gap-8  mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <li className="p-8 shadow-xl bg-indigo-600  text-white rounded-xl">
        <p className="text-3xl font-extrabold">50</p>
        <p className="mt-1 text-xl font-medium">Websites live</p>
      </li>

      <li className="p-8 shadow-xl rounded-xl bg-indigo-600  text-white">
        <p className="text-3xl  font-extrabold">190k+</p>
        <p className="mt-1 text-xl font-medium">Impressions</p>
      </li>

      <li className="p-8 shadow-xl rounded-xl">
        <p className="text-3xl font-extrabold">$150k+</p>
        <p className="mt-1 text-xl font-medium">Client profits</p>
      </li>

      <li className="p-8 shadow-xl rounded-xl">
        <p className="text-3xl font-extrabold">10</p>
        <p className="mt-1 text-xl font-medium">New staff</p>
      </li>

      <li className="p-8 shadow-xl rounded-xl">
        <p className="text-3xl font-extrabold">1</p>
        <p className="mt-1 text-xl font-medium">New office</p>
      </li>

      <li className="p-8 shadow-xl rounded-xl">
        <p className="text-3xl font-extrabold">6</p>
        <p className="mt-1 text-xl font-medium">New tech stacks</p>
      </li>
    </ul>
  </div>
</section>

<div className="py-16 white font-mono">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's our customers say</h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
              <p className="text-gray-600 md:text-xl"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  

<aside className=" font-mono relative overflow-hidden text-black bg-gradient-to-r from-neutral-50 to-indigo-600">
  <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
      <h2 className="text-4xl font-bold sm:text-5xl">
        New product launched!
        <span className="hidden sm:block">
          Impossible to put down
        </span>
      </h2>

      <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, fuga voluptatum ex rem enim deleniti
        officiis, odio voluptatibus non soluta! Quo, explicabo aspernatur!
      </p>

      <Link to="aboutme" className="inline-flex items-center px-6 py-3 font-medium bg-black rounded-full hover:opacity-75" >
        Get it now

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>

  <div className="absolute inset-0 w-full h-full mix-blend-multiply">
    <img
      src={"https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"}
      alt="New robot toy"
      className="absolute inset-0 object-cover object-top w-full h-full"
    />
  </div>
</aside>
    </div>
  );
}
