export default function Create() {
  return (
    <div>
      <aside
  class="overflow-hidden text-white lg:grid bg-gradient-to-r from-blue-600 to-blue-300 lg:grid-cols-2 lg:items-center"
>
  <div class="p-12 text-center sm:p-16 lg:p-24 lg:text-left">
    <div class="max-w-lg mx-auto lg:ml-0 lg:pt-12">
      <p class="text-6xl font-bold sm:text-5xl">
        Howdy! My name is Patrycja /patˈrɨt͡s.ja/<br/>
       <br/>
        I am here to help you find the right portion of resources to be better at coding <br/><br/>
        FOR FREE!
      </p>

     
    </div>
  </div>

  <div class="lg:pt-24">
    <div class="relative w-full h-64 sm:h-96 lg:h-[500px]">
      <img
        class="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
        src={"https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"}
        alt=""
      />
    </div>
  </div>
</aside>
<aside class="p-12 bg-gray-100 sm:p-16 lg:p-24">
  <div class="max-w-xl mx-auto text-center">
    <p class="text-sm font-medium text-gray-500">
      Lorem ipsum dolor sit amet.
    </p>

    <p class="mt-2 text-3xl font-bold sm:text-5xl">
      Lorem ipsum dolor sit amet consectetur.
    </p>

    <div class="mt-8 sm:items-center sm:justify-center sm:flex">
      <a href="" class="block px-5 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600">
        Start free trial
      </a>

      <a
        href=""
        class="block px-5 py-3 mt-4 font-medium text-blue-500 rounded-lg hover:text-blue-600 sm:mt-0"
      >
        Schedule a demo
      </a>
    </div>
  </div>
</aside>

<aside class="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
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
