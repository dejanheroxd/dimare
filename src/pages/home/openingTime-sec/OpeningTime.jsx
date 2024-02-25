import React from "react";
import kalamari from "../../../assets/kalamari.jpg";

export default function OpeningTime() {
  return (
    <div className="p-4">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p className="text-3xl pt-10">OPEN TIME HOURS</p>
        <p className="pt-5">
          Come and experience the classy atmosphere with delicious food
        </p>
        <p className="py-3">OPENING HOUR:</p>
        <p className="pb-1">Monday - Friday : 9.00pm - 22:00pm</p>
        <p className="pb-1">Saturday : 10.00pm - 23:00pm</p>
        <p className="pb-1">Sunday : 5.00pm - 23:00pm</p>
        <p className="pb-1">Holidays : Closed</p>
        <button className="bg-fishBlue text-white h-[50px] mt-9 px-6">
          BOOK A TABLE
        </button>
      </div>
      <div>
        <img className="pt-8 pb-10" src={kalamari} alt="" />
      </div>
    </div>
  );
}
