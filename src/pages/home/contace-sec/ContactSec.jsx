import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import React from "react";
import fish from "../../../assets/fish.png";

export default function ContactSec() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:px-20 lg:py-24">
        <div className="border-r border-gray-300 pb-20 pt-20 lg:pt-20 lg:pb-0 lg:h-[220px] flex justify-center items-center flex-col">
          <div>
            <p className="text-xl text-fishDarkBlue pb-3">WE ARE HERE</p>
          </div>
          <div className="text-gray-500 text-center">
            <p>810 Brickell Bay Dr, Miami, FL 33131</p>
            <p>+365 66 996 25 10</p>
            <p>thalassa@qodeinteractive.com</p>
          </div>
        </div>
        <div className="border-r border-gray-300 items-center justify-center flex-col flex">
          <div className="relative">
            <img
              className="h-[65px] w-[150px] absolute left-[45px] top-[-38px]"
              src={fish}
              alt=""
            />
            <p className="text-[28px] text-fishDarkBlue lg:pt-16 pb-10 lg:pb-0">
              IL MONDO DI MARE
            </p>
          </div>
          <div className="flex lg:pt-16 gap-x-4">
            <FacebookLogo size={20} />
            <InstagramLogo size={20} />
            <TwitterLogo size={20} />
          </div>
        </div>
        <div className="text-center flex justify-center pt-8 lg:pt-0 items-center flex-col">
          <p className="text-fishDarkBlue text-xl pb-3">WORKING HOURS</p>
          <div className="text-gray-500 pb-20 lg:pb-0">
            <p>Monday – Friday 09:00 – 22:00</p>
            <p>Saturday 11:00 – 01:00</p>
            <p>Sunday 11:00 – 23:00</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F4F1] text-center py-2">
        <p className="text-[#848993] italic font-serif">
          © 2021 Qode Interactive, All Rights Reserved
        </p>
      </div>
    </div>
  );
}
