export default function Hero() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-14 px-32 sm:px-10 xs:px-4 md:px-8 xs:flex-col xs:items-start xs:mt-4 space-x-8 sm:flex-col sm:items-center sm:space-x-0 xs:space-x-0">
        {/* HERO CTA */}
        <div className="sm:w-full">
          <div>
            <p className="text-3xl text-indigo-900 font-bold tracking-normal leading-relaxed">
              Forget Busy Work,
              <br />
              Start Next Vacation
            </p>
          </div>

          <div className="mt-3">
            <p className="text-sm text-gray-400 font-normal tracking-normal leading-relaxed">
              We provide what you need to enjoy your
              <br />
              holiday with family. Time to make another
              <br />
              memorable moments.
            </p>
          </div>

          <div className="mt-5">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-xl">
              Show Me Now
            </button>
          </div>

          <div className="mt-10 flex flex-row space-x-4">
            <a className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-indigo-700 h-6 w-6 mb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <span className=" font-semibold text-xs text-indigo-700">
                800.000
              </span>
              <span className=" font-light text-xs text-gray-500 ml-1">
                Travelers
              </span>
            </a>

            <a className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-indigo-700 h-6 w-6 mb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className=" font-semibold text-xs text-indigo-700">
                800.000
              </span>
              <span className=" font-light text-xs text-gray-500 ml-1">
                Treasure
              </span>
            </a>

            <a className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-indigo-700 h-6 w-6 mb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className=" font-semibold text-xs text-indigo-700">
                800.000
              </span>
              <span className=" font-light text-xs text-gray-500 ml-1">
                Cities
              </span>
            </a>
          </div>
        </div>

        {/* HERO IMG */}
        <div className="xs:mt-12 sm:mt-14">
          <div className="relative w-full h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 shadow-lg transform -skew-y-4 skew-y-0 -rotate-6 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1576675784201-0e142b423952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              alt="img"
              className="inset-0 w-full h-full object-cover relative rounded-xl"
            />
            
            <div className="bg-black inset-0 absolute w-full h-full bg-opacity-30 rounded-xl"></div>
            <div className="bg-black bottom-0 left-0 absolute bg-opacity-75 rounded-br-xl rounded-bl-xl">
              <p className="px-4 py-4 text-white font-normal text-base tracking-wide leading-relaxed">
                We provide what you need to enjoy your holiday with family. Time
                to make another memorable moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
