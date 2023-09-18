"use client";
import "./chatContent.css";

import { useState } from "react";

export default function ChatContent() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  return (
    <div className=" chat-content flex-1 flex flex-col overflow-hidden rounded-3xl shadow border border-gray-800 lg:max-w-screen-md">
      {/* <!-- Top bar --> */}
      <div className="border-b flex px-6 py-2 items-center justify-between flex-none ">
        <div className="flex flex-col">
          <h3 className=" mb-1 font-extrabold">
            <span className="text-xl font-bold opacity-50">#</span> general
          </h3>
        </div>

        {/* picture profile  */}
        <div className="ml-auto  lg:block">
          <div className="relative">
            {/* menu profile */}

            <div className="absolute top-0 right-0  -mt-5 mr-2 flex items-center">
              {/* button of profile */}
              <svg
                className="mr-10"
                width="31"
                height="37"
                viewBox="0 0 21 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8457 11.3281C16.8812 11.3281 17.7207 10.3138 17.7207 9.06251C17.7207 7.81124 16.8812 6.79688 15.8457 6.79688C14.8102 6.79688 13.9707 7.81124 13.9707 9.06251C13.9707 10.3138 14.8102 11.3281 15.8457 11.3281Z"
                  fill="#FFFEFE"
                />
                <path
                  d="M15.8457 20.3906C16.8812 20.3906 17.7207 19.3763 17.7207 18.125C17.7207 16.8737 16.8812 15.8594 15.8457 15.8594C14.8102 15.8594 13.9707 16.8737 13.9707 18.125C13.9707 19.3763 14.8102 20.3906 15.8457 20.3906Z"
                  fill="#FFFEFE"
                />
                <path
                  d="M15.8457 29.4531C16.8812 29.4531 17.7207 28.4388 17.7207 27.1875C17.7207 25.9362 16.8812 24.9219 15.8457 24.9219C14.8102 24.9219 13.9707 25.9362 13.9707 27.1875C13.9707 28.4388 14.8102 29.4531 15.8457 29.4531Z"
                  fill="#FFFEFE"
                />
              </svg>
              {/* profile drawer */}

              {/* <!-- drawer component --> */}
              <button
                onClick={() => setIsComponentVisible(!isComponentVisible)}
                className="cursor-pointer my-2"
                type="button"
              >
                <svg
                  className="w-5 h-5 text-white  cursor-pointer   "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </button>

              {isComponentVisible && (
                <div className="sidemodelAM absolute h-screen -right-8 w-80 -top-1   bg-backgroundColorPrimery rounded-md shadow-lg border border-gray-700">
                  <h3 className=" font-light text-white pl-10 py-10 opacity-50">
                    # Admins
                  </h3>
                  {/* icon is online   */}
                  {/* <span className="bg-green-400 rounded-full block w-2 h-2 absolute  ml-10 mt-1 "></span> */}
                  <span className="relative flex h-1 w-3 ml-10 mt-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                  <div className="flex items-center  w-12 h-12 mr-2 ml-10">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      className="rounded-3xl"
                    />
                    <span className="text-white font-bold  opacity-90 ml-10">
                      monica
                    </span>
                  </div>

                  {/* members */}
                  <h3 className=" font-light text-white pl-10 py-10 opacity-50">
                    # Members
                  </h3>
                  {/* icon is online   */}
                  <span className="relative flex h-1 w-3 ml-10 mt-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <div className="flex  items-center w-12 h-12 mr-2 ml-10">
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAACAwADAQAAAAAAAAAAAAAGBwMEBQECCAD/xAA1EAACAQMCAggFAgYDAAAAAAABAgMABBEFIRIxBhMiQVFhcYEHFDKRoULBFVKx0eHwIzPx/8QAGQEBAAMBAQAAAAAAAAAAAAAABAACAwEF/8QAHhEAAwEAAwEAAwAAAAAAAAAAAAERAgMhMUESIjL/2gAMAwEAAhEDEQA/AD+ukkixozuwVVGSTUjAqcEYNL/4q69JaWcGj2RPzV+cNj9MfI/fl6ZpunFQiVcBPpl0gbXr4mKQ/Jxtwwrn6vFvehwgJvjIHLzqFCon4FbiVTsx7/A/v7VZKLwFlyRyGe80Vuikp0XNJ0u51WcQ2qcTn6mbkvmaL7P4dcLCW5u+KQcurXhC1s9CNLWx0uLiXEsoDue/fkPajGOFSBWOttuIXjiSVYq9T+HsoDTWs4Mm5KsNmoPns5beRkmQo6Nhh4GvQE0Y4SMYpe9PdKHV/Pxpy7MwA5r4+1TOo4ycnEpUY3RDXG0XUFWV8W8jBZlJ235NTeRldQynIpA3ISORQcFZV7zyPL9h9qZ/w410anpC20rE3FpiJuI7lf0n7be1M49fDzuXP0MDXFcmuK3MCaR+bGvPvSjVn1XpRfX+eykjQQ47lAIz+c+9Pu9JFtKQcEIxz7V5rgj4EOearknPfR+V+IRxL1kbuUO3ee6tzQ7Zr2W1g3JklAx5d/4odLFmFG/RGzlkdJ1jZkiQ5CnBYmjtxCMqsalnNbKRE80SsNsFgK11kTs4YEEd29Jt7t9SaWOPT4wEJUBeFceu2T+PWi/og8tpbx27IFVhxdk5Ct4f+Vk1FRed/k4Fl5e2trEZrqeOKPxdsUPXep2WoxSRQxz3ELKQ0kcJK/fvrvr0LTzMCnFHFuNs5J9jj1oRabXP4nClnHgMfoWR2BHfkn/FRKqk1uOARr4a2vnt85VD2TV/oBqx03pLalnIincQS+jHY+xx+av/ABK04297b3BG8q8L4/moOt2ZJlZG4XXdGHcw3BrXL8YTee2j1NLbIlv1isTnlVWo9J1Aah0esLnl18KSY9VB/ete2tE6oFx2jvTVrqsHrPcQKdNtTGldHbq4BAdl4E9TSIVQLct40f8Axg1iOaay0uF8mNmkmxyBwMD1wT9xS/MgEADcqPyu6N+NTJFFbj5mPrP+sqG25ny9aaHQIqbJmwBljt+1LC1dmvYC3LfC+G1GvQzUvlwUf6C538Kw34J4J+XYzodMtrnLC1hGebFBUV/BHaGIRDOD+kd9cW98HjCLJwAjJI54qC7gnmkD205U5GFwMbetZUW0ky8FHziCQFVZdzVuS2EUZdCjA94G9YkiXhnSXUJ0ThHZRWxv4mpnu+rbEJLq3NQc1LCT6BfxKCvaxoR2+MsvsKWXUsgVv5s4o26f6g0mu21uxwsaksvjk/4NDEQFwGkIwqbCtsL9QfM7twdPQLUor7QdKgUcDxRqjL5DYEfamCOW3KvP3w86QR2FzbxXUnAiy9lm5BTzGfXen+jBkVhyIzSU6gzUZ5l6Wsp1uSGNzItsOqeQ83k5u3uT+KzbxN1CDIyPeti/sH/h1nqNy0a/NozhQd92JJPnkn02rKtZutlAyML2QQOZrJ+l14V8dTdISd0Uk/Y1vdD7mNbkQTY4WGQD34O/9ax72PB4iAMcz+34qEs1u8UiEgqVbz/3eqNUvlx0dtpbW19oiDLpKvYLo2GBHI1FptrDBJw3KPIAfq60ih3RNcex4UuweqlxiQfSf7UbW01vMyuhUq2+awsHZdIL3+HiMrb2AZzkcTSs39a72MNvpGnTzCJFkZeJj4nuq9eSWyAcDAgDc4xQnrV9LqtvdRWLlYIQesmXvb+VfPz7q7aTXgsek9789r9xKDkKQgbxI5/kmqymSGJ1GerfnioNQj6rUJolGOFsD07q0DcxR2KHZpFfDL5VsgD9INPIJHEcdrApqdH/AIgPpempZ3KiTq9kJBOFwMDn60qOOMT9hQUO48q1HbIQnq2JUbk4P9Kvlwq1S90si+Ss7m3nI643CNbxq/EkUL8TnBwM9oMD6ChS1maKUMpxjfNXtav0ultY47cRtChVn3Jk5bnI8j96zokLHFc06yZXRfuGM0Z5Z5nHd61DKxk4uWBt/aukLlQw8a4dOEkA935NcOjG6OdXeaPGsyhuJNwauabprKmILqeLhJ+hhsPQ5FZXQx3GlxKQcqNj4gk0TWEZjveFweFhxDejtxjcqpHVNFNzg3V1dyxA9rikwG8sKBWmlpDb2Xy0MaxxAYCqMDFXJ+1GOH2FD3S3UZLTT3igfhlZccS/pH9/98Ki7cO/yqxUa8OLVbp4x/xpIUDeONs1QDFvHlWndxgRLuB6+JqNbeBIshuInvPfW6QJ+kFm6x3EDyfQsgLY8M1rXz2nzkyrIQiuQuBnIrKdVRMbHPLFQFXbeu04SqOJ2VQW25nnVhYwi7DlyPia+slBiHjJJhj5DuriVi7Kp2HFjaoQrsccjuTU8NuZWAG7E7VWO8xHcDWnp4BlhXueVFPoTURBp9FtO6myji4R2ExkfmtN7Q5DKCCu3tVnSgFicD9LsB961bZFfi4gOYovrHyIyER9+JuX4oA6ZXPFDdSFsLGyRqPFioY/bKj2ppX0KJbylRg8B/pSg6cnJlT9PWcWPPC/3NXyoym3cgrdkNAjZ+rcCobeKSRgAeEDck9wqzeALEUA2TAB7/8Ad6hkYrEuNs7HzrYISHgL4QFl8c1GXXyPvXNmOKThPI1KyqDyFWRw/9k="
                      alt=""
                      className="rounded-3xl"
                    />
                    <span className="text-white font-bold  opacity-90 ml-10">
                      monica
                    </span>
                    <button className="pl-14">
                      <svg
                        width="31"
                        height="37"
                        viewBox="0 0 21 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8457 11.3281C16.8812 11.3281 17.7207 10.3138 17.7207 9.06251C17.7207 7.81124 16.8812 6.79688 15.8457 6.79688C14.8102 6.79688 13.9707 7.81124 13.9707 9.06251C13.9707 10.3138 14.8102 11.3281 15.8457 11.3281Z"
                          fill="#FFFEFE"
                        />
                        <path
                          d="M15.8457 20.3906C16.8812 20.3906 17.7207 19.3763 17.7207 18.125C17.7207 16.8737 16.8812 15.8594 15.8457 15.8594C14.8102 15.8594 13.9707 16.8737 13.9707 18.125C13.9707 19.3763 14.8102 20.3906 15.8457 20.3906Z"
                          fill="#FFFEFE"
                        />
                        <path
                          d="M15.8457 29.4531C16.8812 29.4531 17.7207 28.4388 17.7207 27.1875C17.7207 25.9362 16.8812 24.9219 15.8457 24.9219C14.8102 24.9219 13.9707 25.9362 13.9707 27.1875C13.9707 28.4388 14.8102 29.4531 15.8457 29.4531Z"
                          fill="#FFFEFE"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Chat messages --> */}
      <div className=" p-14 flex-1 overflow-auto" onClick={() => setIsComponentVisible(!isComponentVisible)}>
        {/* <!-- A message --> */}
        <div className="flex items-start mb-4 text-sm">
          <img
            src="data:image/jpeg;base64,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"
            className="w-10 h-10  rounded-full  mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div className="flex justify-between">
              <span className="font-bold text-white">monica</span>
              <span className="text-grey text-xs">12:45</span>
            </div>
            <p className="text-white leading-normal">doe How are you doing?</p>
          </div>
        </div>
        {/* <!-- A message --> */}
        <div className="flex items-start mb-4 text-sm" onClick={() => setIsComponentVisible(!isComponentVisible)}>
          <img
            src="data:image/jpeg;base64,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"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex-1 overflow-hidden">
            <div className="flex justify-between">
              <span className="font-bold text-white">joey</span>
              <span className="text-grey text-xs">12:46</span>
            </div>
            <p className="text-white leading-normal">hey how u doing!</p>
          </div>
        </div>
      </div>

      {/* <!-- Chat footer --> */}
      <div className="pb-6 px-4 flex-none">
        <div className="flex rounded-3xl  overflow-hidden ml-20 mr-20">
          <input
            type="text"
            className="w-full border-none px-4 bg-slate-800 "
            placeholder="Write your Message "
          />
          <span className="text-3xl text-grey p-2 bg-slate-800">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current h-6 w-6 block bg-slate-800"
            >
              <path
                d="M11.361 9.94977L3.82898 11.2058C3.74238 11.2202 3.66112 11.2572 3.59336 11.313C3.5256 11.3689 3.47374 11.4415 3.44298 11.5238L0.845978 18.4808C0.597978 19.1208 1.26698 19.7308 1.88098 19.4238L19.881 10.4238C20.0057 10.3615 20.1105 10.2658 20.1838 10.1472C20.2571 10.0287 20.2959 9.89212 20.2959 9.75277C20.2959 9.61342 20.2571 9.47682 20.1838 9.3583C20.1105 9.23978 20.0057 9.14402 19.881 9.08177L1.88098 0.0817693C1.26698 -0.225231 0.597978 0.385769 0.845978 1.02477L3.44398 7.98177C3.47459 8.06418 3.5264 8.13707 3.59417 8.19307C3.66193 8.24908 3.74327 8.28623 3.82998 8.30077L11.362 9.55577C11.4083 9.56389 11.4503 9.58809 11.4806 9.62413C11.5109 9.66016 11.5275 9.70571 11.5275 9.75277C11.5275 9.79983 11.5109 9.84538 11.4806 9.88141C11.4503 9.91745 11.4083 9.94165 11.362 9.94977H11.361Z"
                fill="#8BABD8"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
