import React from "react";
import Dishes from "./Dishes";

export default function MenuSec() {
  return (
    <div className="bg-fishBlue pb-10">
      <div className=" text-center pt-16 lg:pb-20 pb-10">
        <div className="flex justify-between">
          <div className="w-5 bg-yellow-300 h-[1px] block"></div>
          <p className="text-[#E1D89F]">TASTE THE BEST THAT SURPRISE YOU</p>
          <div className="w-5 bg-[#E1D89F] h-[1px] block"></div>
        </div>
        <p className="text-2xl pb-1 pt-3 text-white">OUR MENU</p>
        <p className=" pt-2 text-white">EXPLORE TASTE SENSATIONS</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-24 p-4">
        <Dishes
          name={"AHI POKE"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Ahi Tuna Sashimi"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Cheesy Garlic Bread"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Oysters"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Blue Fin Tuna"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Smoked Salmon"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Shrimps"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Snow Crab"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Albacore Tuna"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Tuna Roll"}
          price={"17.95"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
      </div>
      <div className="w-full flex justify-center">
        <button className="border py-2 px-3 text-white border-white">
          VIEW ALL MENU
        </button>
      </div>
    </div>
  );
}
