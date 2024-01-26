import React from "react";
import "./App.css";

import { LuSearch } from "react-icons/lu";
import Sidebar from "./components/Sidebar";
import Cardbox from "./components/Cardbox";

const App = () => {
  return (
    <div className="dark">
      <div className="h-screen dark:bg-zinc-950 dark:text-zinc-200 flex">
        <Sidebar />
        <div className="container mx-auto w-2/3">
          {/* Start Navbar */}
          <nav className="flex justify-between items-center py-4 border-b border-zinc-800">
            <h1 className="text-3xl text-zinc-200">FilmFlow</h1>

            <div className="flex justify-between items-center border border-zinc-700 py-2 px-4 rounded-sm">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none"
              />

              <LuSearch />
            </div>
          </nav>
          {/* End Navbar */}
          <div className="grid grid-cols-4 gap-4 py-4">
            <Cardbox />
            <Cardbox />
            <Cardbox />
            <Cardbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
