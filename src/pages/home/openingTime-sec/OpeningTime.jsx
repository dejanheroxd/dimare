import React from "react";
import seafood from "../../../assets/seafood.jpg";
import { motion } from "framer-motion";

export default function OpeningTime({ openPopUp }) {
  return (
    <div
      id="section3"
      className="p-4 xl:pb-28 xl:flex relative overflow-hidden xl:justify-center xl:gap-48 xl:items-center "
    >
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-3xl pt-10 md:text-5xl md:-ml-[5px]">
            OPEN TIME HOURS
          </p>
          <p className="pt-5">
            Come and experience the classy atmosphere with delicious food
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-3"
        >
          OPENING HOUR:
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="pb-1">
            Monday - Friday
            <span className="text-gray-500"> : 9.00pm - 22:00pm</span>
          </p>
          <p className="pb-1">
            Saturday<span className="text-gray-500"> : 10.00pm - 23:00pm</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="pb-1">
            Sunday<span className="text-gray-500"> : 5.00pm - 23:00pm</span>
          </p>
          <p className="pb-1">
            Holidays<span className="text-gray-500"> : Closed</span>
          </p>
        </motion.div>
        <button
          onClick={() => openPopUp()}
          className="bg-fishBlue hover:cursor-pointer text-white h-[50px] mt-9 px-6"
        >
          CONTACT US
        </button>
      </div>
      <div className="2xl:bg-[#e1f7ff] hidden 2xl:block absolute w-[600px] right-[-50px] top-[200px] z-0 h-[650px]"></div>
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="xl:mr-[-170px] relative "
      >
        <img className="pt-8 pb-10 xl:w-[950px]" src={seafood} alt="" />
      </motion.div>
    </div>
  );
}
