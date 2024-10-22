import React from "react";

const Discounts = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 px-16">
        <div className=" flex relative">
          <img src="/imgs/keyboard.jpg" alt="" />
          <div className="absolute w-full h-full  flex flex-col justify-between text-gray-100">
            <p className="uppercase text-xs font-semibold py-6 pl-6">
              Design a paris
            </p>
            <div className="py-6 pl-6">
              <p className="font-semibold text-lg">35% off on selecting</p>
              <button className="py-2 px-5 bg-gray-100 text-black text-[10px] uppercase mt-2">
                explore now
              </button>
            </div>
          </div>
        </div>
        <div className=" flex relative">
          <img src="/imgs/graySofa.jpg" alt="" />
          <div className="absolute w-full h-full  flex flex-col justify-between text-gray-100">
            <p className="uppercase text-xs font-semibold py-6 pl-6">
              domino bookshelf
            </p>
            <div className="py-6 pl-6">
              <p className="font-semibold text-lg">20% off quick delivery</p>
              <button className="py-2 px-5 bg-gray-100 text-black text-[10px] uppercase mt-2">
                explore now
              </button>
            </div>
          </div>
        </div>
        <div className=" flex relative">
          <img src="/imgs/darkStool.jpg" alt="" />
          <div className="absolute w-full h-full  flex flex-col justify-between text-gray-100">
            <p className="uppercase text-xs font-semibold py-6 pl-6">
              top picks
            </p>
            <div className="py-6 pl-6">
              <p className="font-semibold text-lg">Home run dining chair</p>
              <button className="py-2 px-5 bg-gray-100 text-black text-[10px] uppercase mt-2">
                explore now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
