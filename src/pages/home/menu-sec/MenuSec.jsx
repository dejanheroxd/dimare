import React from "react";
import Dishes from "./Dishes";
import lob from "../../../assets/lob.png";

export default function MenuSec() {
  return (
    <div className="bg-[#F7F7F4] pb-10">
      <div className=" text-center pt-16 lg:pb-20 pb-10">
        <div className="text-center">
          <p className="text-[#001C58]">TASTE THE BEST THAT SURPRISE YOU</p>
        </div>
        <img
          src={lob}
          className="absolute right-[-140px] h-[120px] w-[270px]"
          alt=""
        />
        <p className="text-2xl pb-1 pt-3">OUR MENU</p>
        <p className=" pt-2">EXPLORE TASTE SENSATIONS</p>
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
        <button className="bg-[#001C58] text-white py-2 px-3 ">
          VIEW ALL MENU
        </button>
      </div>
    </div>
  );
}
