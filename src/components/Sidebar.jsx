import React, { useState } from "react";

import { LuAlignJustify, LuChevronDown } from "react-icons/lu";

const genres = ["Action", "Adventure", "Comedy"];

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isSidebarOpen, setIsSetbarOpen] = useState(false);

  const [isGenreSelect, setIsGenreSelect] = useState(null);

  return (
    <div
      className={`w-1/6 h-full sm:h-auto absolute sm:static dark:bg-zinc-900 border-r border-zinc-800 duration-300 ease-in-out ${isSidebarOpen ? "w-4 sm:w-10" : "w-3/5 sm:w-1/6"}`}
    >
      <div className="p-4">
        <div className="relative">
          <h1
            className={`text-xl font-bold duration-200 ease-linear origin-left ${isSidebarOpen ? "scale-x-0 opacity-0" : "block"}`}
          >
            FilmFlow
          </h1>
          <LuAlignJustify
            className="absolute w-[40px] h-[40px] p-[8px] text-xl cursor-pointer -right-9 sm:-right-9 top-14 sm:top-0 bg-zinc-800 rounded-full"
            onClick={() => {
              setIsSetbarOpen(!isSidebarOpen);
            }}
          />
        </div>

        <div
          className={`mt-12 duration-200 ease-linear origin-left ${isSidebarOpen ? "scale-x-0 opacity-0" : "block"}`}
        >
          <div className="border border-zinc-800 rounded-sm">
            <button
              className="w-full flex justify-between items-center py-2 px-4 dark:bg-zinc-800 capitalize cursor-pointer"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <p className="font-semibold">genre</p>
              <LuChevronDown
                className={`${isDropdownOpen ? "transform rotate-180" : ""} duration-100`}
              />
            </button>

            {isDropdownOpen ? (
              <div className="grid grid-cols-2 gap-2 py-2 px-4 dark:bg-zinc-900 cursor-pointer">
                {genres.map((genre) => {
                  return (
                    <button
                      className={`text-center p-2 border border-zinc-800 rounded-sm duration-300 ${genre === isGenreSelect ? "bg-zinc-300 text-zinc-950" : "bg-transparent"}`}
                      onClick={() => {
                        setIsGenreSelect(genre);
                        setIsDropdownOpen(true);
                      }}
                    >
                      {genre}
                    </button>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
