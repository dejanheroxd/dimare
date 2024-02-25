import React from "react";

export default function Dishes({ name, price, description }) {
  return (
    <div className="pb-8">
      <div className="flex flex-col">
        <p className="text-xl text-[#001C58]">{name}</p>
        <p className="w-full bg-gray-300 h-[1px] hidden lg:block"></p>
        <p className="text-lg text-[#001C58] pt-1">${price}</p>
        <p></p>
      </div>
      <p className="">{description}</p>
    </div>
  );
}
