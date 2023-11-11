function Header() {
  return (
    <>
      <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600">
        <a
          className="text-2xl font-bold text-violet-600 dark:text-white"
          href="#"
        >
          Abc
        </a>

        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-violet-600 dark:text-gray-100 p-1"
            id="navbar_burger"
          >
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Hamberger menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <div className=" relative mx-auto text-gray-600">
              <input
                className="border border-gray-300 placeholder-current h-10 px-5 pr-16  rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200 "
                type="search"
                name="search"
                placeholder="Search"
              />

              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              ></button>
            </div>
          </li>
        </ul>

        <div className="hidden lg:flex">
          <div>
            <span
              className="hidden"
              id="util_data"
              data="{{ json_encode($util_data) }}"
            ></span>
            <a
              className=" py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hidden lg:inline-block "
              href="http://localhost:5173/"
            >
              Sign Out
            </a>
          </div>
        </div>
      </nav>

      {/* <!-- mobile navbar --> */}
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
        <nav className="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-2xl font-bold text-black text-violet-600 dark:text-gray-100"
              href="https://tailwindflex.com/"
            >
              TailwindFlex
            </a>

            <button className="navbar-close"></button>
          </div>

          <div className=" relative mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none dark:placeholder-gray-200 dark:bg-gray-500 dark:border-gray-50"
              type="search"
              name="search"
              placeholder="Search"
            />

            <button
              type="submit"
              className="absolute right-0 top-0 mt-3 mr-4"
            ></button>
          </div>

          <div className="mt-auto">
            <div className="pt-6">
              <button
                id="theme-toggle-2"
                type="button"
                className=" py-2.5 w-[97.6%] mb-3 rounded-xl flex justify-center align-middle py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  id="theme-toggle-dark-icon-2"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>

              <a
                className="block py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 px-4 py-3 mb-3 text-sm text-center font-semibold rounded-xl"
                href="/login"
              >
                Sign in
              </a>

              <a
                className="block py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700 px-4 py-3 mb-2 text-xs text-center text-white font-semibold bg-violet-600 hover:bg-violet-700  rounded-xl"
                href="https://tailwindflex.com/playground"
              >
                Tailwind Playground
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>TailwindFlex Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
