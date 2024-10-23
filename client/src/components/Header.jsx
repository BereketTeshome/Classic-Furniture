import React from "react";

const Header = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col text-center justify-center items-center text-gray-50"
      style={{ backgroundImage: `url(/imgs/header2.jpg)` }}
    >
      <p className="text-sm font-semibold mb-3">NEW IN 2024</p>
      <p className="text-6xl font-semibold mb-10">Classic Furniture</p>
      <a href="/" className="px-5 py-2 uppercase text-black bg-white text-xs">
        shop collection
      </a>
    </div>
  );
};

export default Header;
