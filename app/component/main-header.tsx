import React from "react";

const MainHeader = () => {
  // is holder?
  const isHolder = false;

  return (
    <header className="bg-[#333] w-full flex items-center justify-around p-4 drop-shadow-lg rounded-lg mb-4">
      <h1 className="text-4xl font-bold bg-[#111] text-yellow-500 p-2 rounded-lg">
        Pinnote
      </h1>

      <nav className="w-[50%] flex items-center justify-between">
        <a
          href="/"
          className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg hover:bg-[#222]"
        >
          home
        </a>
        <a
          href="/mint"
          className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg hover:bg-[#222]"
        >
          mint
        </a>
        <a
          href="/swap"
          className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg hover:bg-[#222]"
        >
          swap
        </a>
        <a
          href="/about"
          className="font-bold bg-[#111] p-2 rounded-lg drop-shadow-lg hover:bg-[#222]"
        >
          about
        </a>

        {isHolder && (
          <a href="#" className="bg-[#222] p-2 rounded-lg hover:bg-[#555]">
            chat
          </a>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
