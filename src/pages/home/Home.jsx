export default function Create() {
  return (
    <div>
<section>
  <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={"https://unsplash.com/photos/llkVQVjns80"}
            alt="Indoors house"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
          <p class="text-6xl font-bold sm:text-5xl">
        Howdy! <br/>My name is Patrycja /patˈrɨt͡s.ja/<br/>
       <br/>
        I am here to help you find the right resources to be better at coding <br/><br/>
        FOR FREE!
      </p>

          </h2>

          <a
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href="/contact"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-white bg-blue-600">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-xl">
      <h2 class="text-4xl font-bold sm:text-6xl">
        An amazing year
      </h2>

      <p class="mt-4 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tempore beatae facilis dignissimos rem praesentium
        officia obcaecati quisquam iure recusandae!
      </p>
    </div>

    <ul class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">50</p>
        <p class="mt-1 text-xl font-medium">Websites live</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">190k+</p>
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
   

<aside class="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-600">
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
