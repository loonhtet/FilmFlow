import React from "react";

const Cardbox = () => {
  return (
    <div className="border border-zinc-700 p-2 rounded-sm">
      <img
        src="https://images.unsplash.com/photo-1521856729154-7118f7181af9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-56 object-cover rounded-sm"
      />
      <h1 className="text-lg font-bold">Title</h1>
      <h2 className="text-sm">Year</h2>
    </div>
  );
};

export default Cardbox;
