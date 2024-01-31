import React, { useState } from "react";
import { LuAlignJustify, LuChevronDown } from "react-icons/lu";

const Sidebar = () => {
  const menus = [
    {
      title: "Genre",
      submenu: false,
      submenuItems: [
        { title: "adventure" },
        { title: "fantasy" },
        { title: "Horror" },
      ],
    },
    {
      title: "Year",
      submenu: false,
      submenuItems: [
        { title: 2019 },
        { title: 2020 },
        { title: 2021 },
        { title: 2022 },
        { title: 2023 },
        { title: 2024 },
      ],
    },
    { title: "Imdb Rating", submenu: false },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [dropdownStates, setDropdownStates] = useState(
    menus.map((menu) => menu.submenu)
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (index) => {
    const updatedStates = [...dropdownStates];
    // console.log(updatedStates);
    updatedStates[index] = !updatedStates[index];
    setDropdownStates(updatedStates);
  };

  return (
    <div
      className={`w-1/6 h-full sm:h-auto absolute sm:static bg-zinc-100 border-zinc-200 dark:bg-zinc-900 border-r dark:border-zinc-800 duration-300 ease-in-out ${isSidebarOpen ? "w-4 sm:w-10" : "w-3/5 sm:w-1/6"}`}
    >
      <div className="p-4">
        <div className="relative">
          <h1
            className={`text-xl font-bold duration-200 ease-linear origin-left ${isSidebarOpen ? "scale-x-0 opacity-0" : "block"}`}
          >
            FilmFlow
          </h1>
          <LuAlignJustify
            className="absolute w-[40px] h-[40px] p-[8px] text-xl cursor-pointer -right-9 sm:-right-9 top-14 sm:top-0 bg-zinc-200 dark:bg-zinc-800 rounded-full"
            onClick={toggleSidebar}
          />
        </div>

        <div
          className={`mt-12 duration-200 ease-linear origin-left ${isSidebarOpen ? "scale-x-0 opacity-0" : "block"}`}
        >
          {menus.map((menu, index) => (
            <div
              className="border border-zinc-300 dark:border-zinc-800 rounded-sm my-4"
              key={index}
            >
              {/* Dropdown button  */}
              <button
                className="w-full flex justify-between items-center py-2 px-4 bg-zinc-200 dark:bg-zinc-800 capitalize cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <p className="font-semibold">{menu.title}</p>
                <LuChevronDown
                  className={`duration-200 ${dropdownStates[index] ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {/* Dropdown content */}
              <div
                className={`grid grid-cols-2 ${
                  dropdownStates[index] ? "block" : "hidden"
                }`}
              >
                {menu.submenuItems &&
                  menu.submenuItems.map((submenuItem, subIndex) => (
                    <button
                      className="py-2 border border-transparent hover:border-zinc-700 duration-200 capitalize"
                      key={subIndex}
                    >
                      {submenuItem.title}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
