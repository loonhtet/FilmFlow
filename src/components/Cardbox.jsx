import React from "react";

const Cardbox = ({ movieprops }) => {
  return (
    <div className="border border-zinc-700 p-2 rounded-sm">
      <img
        src={movieprops.Poster}
        alt={movieprops.Title}
        className="w-full h-56 object-cover rounded-sm"
      />
      <h1 className="text-lg font-bold">{movieprops.Title}</h1>
      <h2 className="text-sm">{movieprops.Year}</h2>
    </div>
  );
};

export default Cardbox;
