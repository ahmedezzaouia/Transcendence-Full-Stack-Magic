export default function AdminsMembers() {
  return (
    <div className="bg-slate-900 ml-12 pr-40 rounded-2xl hidden lg:block admin-div border border-gray-700">
      {/* admins */}
      <h3 className=" font-light text-white pl-10 py-10 opacity-50">
        # Admins
      </h3>
      {/* icon is online   */}
<span className="relative flex h-1 w-3 ml-10 mt-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>      <div className="flex items-center  w-12 h-12 mr-2 ml-10">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="rounded-3xl"
        />
        <span className="text-white font-bold  opacity-90 ml-10">monica</span>
      </div>

      {/* members */}
      <h3 className=" font-light text-white pl-10 py-10 opacity-50">
        # Members
      </h3>
      {/* icon is online   */}
<span className="relative flex h-1 w-3 ml-10 mt-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>      <div className="flex  items-center w-12 h-12 mr-2 ml-10">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="rounded-3xl"
        />
        <span className="text-white font-bold  opacity-90 ml-10">monica</span>
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
  );
}
