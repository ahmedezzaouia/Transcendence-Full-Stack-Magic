import React from "react";
import Image from "next/image";
import "./asidebar.css";

const AsideBar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="logo-container">
        <Image src={"/assets/logo.png"} alt="Description" width={150} height={150} style={{ height: "auto", width: "auto" }} />
      </div>
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Chat</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 19"
              >
                <path d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
              </svg>
              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="20"
                viewBox="0 0 33 20"
                fill="none"
              >
                <path
                  d="M32.1147 9.39529C30.6564 3.94779 28.4618 1.04026 25.2063 0.246052C24.522 0.0801949 23.8121 -0.00266562 23.099 6.53638e-05C22.1563 6.53638e-05 21.3354 0.18981 20.4671 0.390918C19.4206 0.633496 18.2319 0.909024 16.4986 0.909024C14.7653 0.909024 13.5759 0.634064 12.5274 0.391486C11.6583 0.18981 10.8381 6.53638e-05 9.8982 6.53638e-05C9.16077 -0.00204745 8.42655 0.0805492 7.71664 0.245484C4.47833 1.03628 2.28508 3.94267 0.805494 9.39188C-0.785473 15.2558 -0.00236546 18.9581 3.00149 19.8171C3.41325 19.937 3.84649 19.9988 4.28307 20C6.34087 20 7.99097 18.5837 9.11853 17.4242C10.3925 16.1119 11.8838 15.4461 16.4986 15.4461C20.6204 15.4461 22.3262 15.908 23.7996 17.4242C24.7257 18.3775 25.6009 19.0445 26.4741 19.4643C27.6354 20.0222 28.7959 20.146 29.9228 19.8262C31.698 19.3257 32.7156 18.0026 32.948 15.8926C33.1247 14.2747 32.8524 12.1494 32.1147 9.39529ZM13.1984 9.08965H10.9983V10.9076C10.9983 11.1486 10.8824 11.3798 10.6761 11.5503C10.4698 11.7208 10.19 11.8165 9.8982 11.8165C9.60645 11.8165 9.32664 11.7208 9.12034 11.5503C8.91404 11.3798 8.79814 11.1486 8.79814 10.9076V9.08965H6.59801C6.30626 9.08965 6.02645 8.99389 5.82015 8.82343C5.61385 8.65296 5.49795 8.42177 5.49795 8.18069C5.49795 7.93962 5.61385 7.70843 5.82015 7.53796C6.02645 7.3675 6.30626 7.27174 6.59801 7.27174H8.79814V5.45382C8.79814 5.21275 8.91404 4.98155 9.12034 4.81109C9.32664 4.64062 9.60645 4.54486 9.8982 4.54486C10.19 4.54486 10.4698 4.64062 10.6761 4.81109C10.8824 4.98155 10.9983 5.21275 10.9983 5.45382V7.27174H13.1984C13.4901 7.27174 13.77 7.3675 13.9763 7.53796C14.1826 7.70843 14.2985 7.93962 14.2985 8.18069C14.2985 8.42177 14.1826 8.65296 13.9763 8.82343C13.77 8.99389 13.4901 9.08965 13.1984 9.08965ZM18.9737 9.31689C18.7018 9.31689 18.4359 9.25026 18.2098 9.12541C17.9836 9.00056 17.8074 8.82311 17.7033 8.6155C17.5992 8.40789 17.572 8.17943 17.6251 7.95903C17.6781 7.73863 17.8091 7.53618 18.0014 7.37728C18.1937 7.21838 18.4387 7.11017 18.7055 7.06633C18.9722 7.02249 19.2487 7.04499 19.4999 7.13098C19.7512 7.21698 19.966 7.36261 20.1171 7.54946C20.2682 7.7363 20.3488 7.95598 20.3488 8.18069C20.3488 8.48203 20.2039 8.77103 19.9461 8.98411C19.6882 9.19719 19.3384 9.31689 18.9737 9.31689ZM21.9989 11.8165C21.7268 11.8165 21.4608 11.7498 21.2346 11.6248C21.0084 11.4999 20.8321 11.3223 20.7282 11.1145C20.6242 10.9067 20.5972 10.6781 20.6505 10.4576C20.7038 10.2371 20.8351 10.0347 21.0278 9.87591C21.2204 9.71713 21.4658 9.60914 21.7327 9.56562C21.9997 9.5221 22.2763 9.54501 22.5275 9.63144C22.7787 9.71787 22.9932 9.86394 23.1439 10.0512C23.2946 10.2384 23.3747 10.4583 23.374 10.6832C23.3731 10.984 23.2278 11.2723 22.97 11.4847C22.7122 11.6972 22.363 11.8165 21.9989 11.8165ZM21.9989 6.81726C21.7269 6.81726 21.4611 6.75062 21.2349 6.62577C21.0088 6.50093 20.8326 6.32348 20.7285 6.11586C20.6244 5.90825 20.5972 5.6798 20.6502 5.4594C20.7033 5.239 20.8343 5.03654 21.0266 4.87764C21.2189 4.71874 21.4639 4.61053 21.7306 4.56669C21.9974 4.52285 22.2739 4.54535 22.5251 4.63135C22.7764 4.71734 22.9911 4.86297 23.1422 5.04982C23.2933 5.23667 23.374 5.45634 23.374 5.68106C23.374 5.9824 23.2291 6.27139 22.9712 6.48447C22.7134 6.69755 22.3636 6.81726 21.9989 6.81726ZM25.0241 9.31689C24.7521 9.31689 24.4863 9.25026 24.2601 9.12541C24.034 9.00056 23.8577 8.82311 23.7537 8.6155C23.6496 8.40789 23.6224 8.17943 23.6754 7.95903C23.7285 7.73863 23.8594 7.53618 24.0517 7.37728C24.2441 7.21838 24.4891 7.11017 24.7558 7.06633C25.0226 7.02249 25.299 7.04499 25.5503 7.13098C25.8016 7.21698 26.0163 7.36261 26.1674 7.54946C26.3185 7.7363 26.3992 7.95598 26.3992 8.18069C26.3992 8.48203 26.2543 8.77103 25.9964 8.98411C25.7385 9.19719 25.3888 9.31689 25.0241 9.31689Z"
                  fill="#545F71"
                />
              </svg>

              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              <span className="flex-1 ml-3 whitespace-nowrap">Plag Game</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 15"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                />
              </svg>
              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;
