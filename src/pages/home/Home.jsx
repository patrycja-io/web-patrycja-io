import me from "../../assets/me.jpg";
import keyboard from "../../assets/keyboard.jpg";
import levi from "../../assets/levi-guzman.jpg";

export default function Create() {
  return (
    <div>

<main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden ">
    <div class="flex relative z-20 items-center">
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div class="flex flex-col">
                <img src={me} class="rounded-full w-28 mx-auto"/>
                <p class="text-3xl my-6 text-center dark:text-white">
                    Hi, I&#x27;m Patrycja 🤘
                </p>
                <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                    Sharing free resources,  building digital products,  and experiences.
                </h2>
                <div class="flex items-center justify-center mt-4">
                    <a href="#" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent rounded-lg dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                        CONNECT WITH ME
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<aside>
  <div class="px-4 py-16  font-mono mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="p-8 text-center text-white bg-indigo-600 sm:col-span-2 sm:p-16 lg:py-24">
        <div class="max-w-lg mx-auto space-y-8">
        <p class="text-3xl font-bold sm:text-4xl">
           Coding is for everyone!
          </p>
          

          <p class="text-xl">
            Explore FREE resources that will help ypu to learn and implement better code <code className=""> </code>
          </p>

          <a
            href=""
            class="inline-flex items-center px-5 py-3 mt-8 font-medium text-indigo-600 bg-white rounded-lg hover:opacity-75"
          >
            Come and see

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-4 h-4 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div class="relative h-64 lg:order-first lg:h-full">
        <img
          src={levi}
          alt="Sunset with palm trees"
          class="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div class="relative h-64 lg:h-full">
        <img
          src={keyboard}
          alt="Man in a hat and yellow jumper"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</aside>
<section class="text-black  font-mono bg-neuatral-50">
  <div class="max-w-screen-2xl px-20 py-20 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-xl py-20">
      <h2 class="text-4xl font-bold sm:text-7xl">
       Database is going to be even bigger. But for now...
      </h2>

      <p class="mt-4 sm:text-xl">
       This is only half of things that you can find here
      </p>
    </div>

    <ul class="grid grid-cols-1 gap-8  mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <li class="p-8 shadow-xl bg-indigo-600  text-white rounded-xl">
        <p class="text-3xl font-extrabold">50</p>
        <p class="mt-1 text-xl font-medium">Websites live</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl bg-indigo-600  text-white">
        <p class="text-3xl  font-extrabold">190k+</p>
        <p class="mt-1 text-xl font-medium">Impressions</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">$150k+</p>
        <p class="mt-1 text-xl font-medium">Client profits</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">10</p>
        <p class="mt-1 text-xl font-medium">New staff</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">1</p>
        <p class="mt-1 text-xl font-medium">New office</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">6</p>
        <p class="mt-1 text-xl font-medium">New tech stacks</p>
      </li>
    </ul>
  </div>
</section>

<div class="py-16 white font-mono">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's our customers say</h2>
        <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div class="h-full flex flex-col justify-center space-y-4">
              <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
              <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  

<aside class=" font-mono relative overflow-hidden text-black bg-gradient-to-r from-neutral-50 to-indigo-600">
  <div class="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
      <h2 class="text-4xl font-bold sm:text-5xl">
        New product launched!
        <span class="hidden sm:block">
          Impossible to put down
        </span>
      </h2>

      <p class="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, fuga voluptatum ex rem enim deleniti
        officiis, odio voluptatibus non soluta! Quo, explicabo aspernatur!
      </p>

      <a class="inline-flex items-center px-6 py-3 font-medium bg-black rounded-full hover:opacity-75" href="">
        Get it now

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>

  <div class="absolute inset-0 w-full h-full mix-blend-multiply">
    <img
      src={"https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"}
      alt="New robot toy"
      class="absolute inset-0 object-cover object-top w-full h-full"
    />
  </div>
</aside>
    </div>
  );
}
