import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import notFound from "./assets/not-found.png";

import { LuSearch } from "react-icons/lu";
import Sidebar from "./components/Sidebar";
import Cardbox from "./components/Cardbox";

import { FaFacebook, FaFacebookMessenger, FaGithub } from "react-icons/fa";
import { MdDarkMode, MdSunny } from "react-icons/md";
import Skeleton from "./components/Skeleton";

// import Poplular from "./components/Poplular";

const API_KEY = "be705ebf";
const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const App = () => {
  const [isdark, setIsdark] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isloading, setIsLoading] = useState(false);

  const searchTitle = async (title) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
      // console.log(data.Search);

      if (data.Error) {
        // Handle API error, e.g., show an error message
        console.error("API Error:", data.Error);
      }
    } catch (error) {
      // Handle any network or unexpected errors
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
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
    <div className={`${isdark ? "dark" : ""}`}>
      <div className="duration-300 h-full min-h-[100vh] dark:bg-zinc-950 dark:text-zinc-200 flex">
        <button
          className="fixed right-2 bottom-6 sm:right-10 sm:bottom-4 text-2xl p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full"
          onClick={() => setIsdark(!isdark)}
        >
          {isdark ? <MdSunny /> : <MdDarkMode />}
        </button>

        <Sidebar />
        <div className="container mx-auto w-5/6 sm:w-2/3">
          {/* Start Navbar */}
          <nav className="flex justify-between items-center py-4 border-b border-zinc-200 dark:border-zinc-800">
            <h1 className="text-3xl dark:text-zinc-200 font-bold">FilmFlow</h1>

            <div className="w-1/2 sm:w-max flex justify-between items-center border border-zinc-400 dark:border-zinc-700 py-2 px-4 rounded-sm">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent outline-none"
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

          {isloading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : movies?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              {movies.map((movie) => {
                return <Cardbox movieprops={movie} />;
              })}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <img src={notFound} alt="" class="block" />
              <h1 className="text-2xl mt-4 font-bold">No Movies are Found</h1>
            </div>
          )}

          {/* <Poplular   /> */}
        </div>
      </div>
      <footer className="flex justify-center items-center bg-zinc-100 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 py-6 font-semibold border-t dark:border-zinc-800">
        <div className="w-5/6 sm:w-1/2 mx-auto flex justify-between">
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
