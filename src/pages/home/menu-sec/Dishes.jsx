import React from "react";

export default function Dishes({ name, price, description }) {
  return (
    <div className="pb-8">
      <div className="flex flex-col">
        <p className="text-xl text-[#E1D89F]">{name}</p>
        <p className="w-full bg-gray-300 h-[1px] hidden lg:block"></p>
        <p className="text-lg text-white pt-1">${price}</p>
        <p></p>
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
}
