export default function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-white text-center py-3 px-32 sm:px-10 xs:px-4 md:px-8 border-b-2 border-gray-200">
        <div className="flex">
          <a
            href="#"
            className="text-2xl font-bold text-indigo-900 sm:hidden xs:hidden"
          >
            Stay<span className="text-2xl font-semibold text-indigo-500">cation</span>
          </a>
          <div className="hover:bg-gray-500 rounded-lg p-1 2xl:hidden xl:hidden lg:hidden md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-indigo-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>

        <div className="xs:hidden sm:hidden">
          <a
            href="#"
            className="text-indigo-500 px-2 text-sm font-normal hover:bg-indigo-500 hover:text-indigo-100 rounded-xl py-3"
          >
            Profile
          </a>
          <a href="#" className="text-indigo-500 px-2 text-sm font-normal ">
            Discography
          </a>
          <a href="#" className="text-indigo-500 px-2 text-sm font-normal ">
            Gallery
          </a>
          <a href="#" className="text-indigo-500 px-2 text-sm font-normal">
            Video
          </a>
          <a href="#" className="text-indigo-500 px-2 text-sm font-normal">
            Notice
          </a>
          <a href="#" className="text-indigo-500 px-2 text-sm font-normal">
            Schedule
          </a>
        </div>

        <div className="space-x-2">
          <a href="#" className="text-indigo-500 text-sm font-normal">
            Sign In
          </a>
          <a href="#" className="text-indigo-500 text-sm font-normal">
            |
          </a>
          <a
            href="#"
            className="text-white text-sm font-normal bg-indigo-500 px-3 py-2 rounded-lg"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
