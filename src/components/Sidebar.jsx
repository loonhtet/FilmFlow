import React, { useState } from "react";

import { LuAlignJustify, LuChevronDown } from "react-icons/lu";

const genres = ["Action", "Adventure", "Comedy"];

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-1/6 dark:bg-zinc-900 border-r border-zinc-800">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">FilmFlow</h1>
          <LuAlignJustify className="text-xl" />
        </div>

        <div className="mt-12">
          <div className="border border-zinc-800 rounded-sm">
            <button
              className="w-full flex justify-between items-center py-2 px-4 dark:bg-zinc-800 capitalize cursor-pointer"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <p>genre</p>
              <LuChevronDown
                className={`${isDropdownOpen ? "transform rotate-180" : ""} duration-100`}
              />
            </button>

            {isDropdownOpen ? (
              <div className="grid grid-cols-2 gap-2 py-2 px-4 dark:bg-zinc-900 cursor-pointer">
                {genres.map((genre) => {
                  return (
                    <div className="text-center p-2 border border-zinc-900 rounded-sm">
                      {genre}
                    </div>
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
