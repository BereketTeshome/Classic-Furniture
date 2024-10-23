import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="px-16">
      <div className="grid grid-cols-6 gap-5 my-20">
        <Link to="/">
          <div className="w-full flex justify-center">
            <img src="/imgs/cabinet.png" alt="cabinet" className="w-[100px]" />
          </div>
          <p className="uppercase text-sm font-semibold text-gray-800 text-center mt-2">
            cabinet
          </p>
        </Link>
        <Link to="/">
          <div className="w-full flex justify-center">
            <img src="/imgs/chair.png" alt="chair" className="w-[100px]" />
          </div>
          <p className="uppercase text-sm font-semibold text-gray-800 text-center mt-2">
            chair
          </p>
        </Link>
        <Link to="/">
          <div className="w-full flex justify-center">
            <img src="/imgs/lamp.png" alt="lamp" className="w-[100px]" />
          </div>
          <p className="uppercase text-sm font-semibold text-gray-800 text-center mt-2">
            lamp
          </p>
        </Link>
        <Link to="/">
          <div className="w-full flex justify-center">
            <img src="/imgs/sofa.png" alt="sofa" className="w-[100px]" />
          </div>
          <p className="uppercase text-sm font-semibold text-gray-800 text-center mt-2">
            sofa
          </p>
        </Link>
        <Link to="/">
          <div className="w-full flex justify-center">
            <img src="/imgs/stool.png" alt="stool" className="w-[100px]" />
          </div>
          <p className="uppercase text-sm font-semibold text-gray-800 text-center mt-2">
            stool
          </p>
        </Link>
        <Link to="/">
          <div className="w-full flex justify-center">
            <img src="/imgs/table.png" alt="table" className="w-[100px]" />
          </div>
          <p className="uppercase text-sm font-semibold text-gray-800 text-center mt-2">
            table
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
