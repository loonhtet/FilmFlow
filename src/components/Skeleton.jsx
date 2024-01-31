import React from "react";

const Skeleton = () => {
  return (
    <div className="border border-zinc-400 dark:border-zinc-700 p-2 rounded-sm duration-200 ease-in hover:scale-95">
      <div className="w-full h-56 object-cover rounded-sm bg-zinc-500 animate-pulse"></div>

      <h1 className="w-full h-4 text-lg mt-2 font-bold bg-zinc-500 animate-pulse rounded-full"></h1>
      <h2 className="w-full h-3 text-sm mt-2 bg-zinc-500 animate-pulse rounded-full"></h2>
    </div>
  );
};

export default Skeleton;
