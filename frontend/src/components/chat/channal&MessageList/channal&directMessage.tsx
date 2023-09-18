"use client"

import CreateChannal from "../modelCreateChannal/createChannal";

export default function ChannalAndDirectMessage() {

  return (
    <div className="list-div bg-slate-900 mr-10 ml-10 text-purple-lighter  w-80  hidden lg:block rounded-2xl overflow-hidden border border-gray-800">
      {/* <!-- Sidebar Header --> */}
      <div className="text-white mb-2 mt-3 px-4  flex justify-between">
        <div className="flex-auto ">
          <div className="flex items-center justify-between">
            <hr />
            <span>
              <svg
                className="w-6 h-6 text-whote opacity-75 dark:text-white cursor-pointer "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* channels  */}
      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center" >
          <div className="opacity-75">Channels</div>
          <div>
            <CreateChannal />
          </div>
        </div>
        <div className="bg-teal-dark py-4 px-4 text-gray-400 font-bold  hover:bg-slate-700 hover:text-white hover:opacity-100 rounded-2xl cursor-pointer">
          # general
        </div>
      </div>

      {/* direct messages */}
      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75">Direct Messages</div>
          <div>
            <svg
              className="fill-current h-4 w-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center py-2  hover:bg-slate-700 rounded-2xl cursor-pointer">
        <span className="relative flex h-1 w-3 ml-10 -mr-2  -mt-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
        </span>
      <div className="flex items-center  w-12 h-12 mr-2 ">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="rounded-3xl"
        />
        <span className="text-white font-bold  opacity-90 ml-5">monica</span>
      </div>
          
        </div>
      </div>
    </div>
  );
}
