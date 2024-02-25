import React from "react";
import aboutFish from "../../../assets/aboutFish.jpg";
import crab from "../../../assets/crab.png";

export default function AboutSec() {
  return (
    <div className="bg-[#EEF9FD] pb-4 overflow-hidden">
      <div className="p-4 pt-20">
        <img src={aboutFish} alt="" />
      </div>
      <div className="p-4 pt-[64px] relative">
        <div className="flex relative">
          <p>ABOUT RESTAURANT</p>
          <div className=" absolute left-[165px] top-[18px]"></div>
        </div>
        <p className="text-3xl pt-4 pb-8">
          Enjoy An Exceptional Journey of Taste
        </p>
        <img
          className="absolute w-[240px] h-[110px] right-[-90px] rotate-[-50deg] top-4"
          src={crab}
          alt=""
        />
        <div className="text-gray-700">
          Our buzzy food-hall style concept is inspired by international dining
          styles, especially in Asia. Explore the following fast-action food
          stations as busy chefs perform.
          <p className="pt-5">
            Enjoy a verdant Garden to Glass experience. It’s in the view, it’s
            reflected in the design, and it infuses many drinks. In fact, all
            our delicious fresh ingredients are sustainably picked from our
            Jemima’s Kitchen Garden. Our flourishing range of cocktails,
            spirits, beers and wines are all made with integrity and offer
            something for every guest.
          </p>
        </div>
        <button className="bg-fishBlue text-white h-[50px] mt-9 px-6">
          READ MORE ABOUT US
        </button>
      </div>
    </div>
  );
}
