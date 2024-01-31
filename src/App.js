import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import { LuSearch } from "react-icons/lu";
import Sidebar from "./components/Sidebar";
import Cardbox from "./components/Cardbox";

import { FaFacebook, FaFacebookMessenger, FaGithub } from "react-icons/fa";
import Poplular from "./components/Poplular";

const API_KEY = "be705ebf";
const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchTitle = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    // console.log(data.Search);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      searchTitle(searchTerm);
    }
  };

  useEffect(() => {
    searchTitle("");
  }, []);

  return (
    <div className="dark">
      <div className="h-full min-h-[100vh] dark:bg-zinc-950 dark:text-zinc-200 flex">
        <Sidebar />
        <div className="container mx-auto w-2/3">
          {/* Start Navbar */}
          <nav className="flex justify-between items-center py-4 border-b border-zinc-800">
            <h1 className="text-3xl text-zinc-200 font-bold">FilmFlow</h1>

            <div className="flex justify-between items-center border border-zinc-700 py-2 px-4 rounded-sm">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={handleSearchKeyPress}
              />

              <LuSearch
                onClick={() => searchTitle(searchTerm)}
                className="cursor-pointer"
              />
            </div>
          </nav>
          {/* End Navbar */}
          {movies?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              {movies.map((movie) => {
                return <Cardbox movieprops={movie} />;
              })}
            </div>
          ) : (
            <div className="h-full flex justify-center items-center">
              <h1 className="text-xl">No Movie Found</h1>
            </div>
          )}

          {/* <Poplular   /> */}
        </div>
      </div>
      <footer className="flex justify-center items-center dark:bg-zinc-900 dark:text-zinc-200 py-6 font-semibold border-t border-zinc-800">
        <div className="w-1/2 mx-auto flex justify-between">
          <p>© 2024 Loon Htet</p>
          <div className="flex items-center gap-2 ">
            <a href="#">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#">
              <FaFacebookMessenger className="text-xl" />
            </a>
            <a href="#">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
