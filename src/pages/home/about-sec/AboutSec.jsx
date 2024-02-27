import React from "react";
import aboutFish from "../../../assets/aboutFish.jpg";
import crab from "../../../assets/crab.png";
import { motion } from "framer-motion";

export default function AboutSec() {
  return (
    <div className="bg-[#EEF9FD] 2xl:bg-white relative xl:flex xl:justify-center xl:gap-x-10 pb-4 overflow-hidden">
      <div className="2xl:bg-[#e1f7ff] absolute w-[1000px] left-[-320px] top-[-230px] z-0 h-[900px]"></div>
      <div className="p-4 pt-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            className="max-w-[500px] xl:ml-10 xl:w-[800px] z-10 w-full"
            src={aboutFish}
            alt=""
          />
        </motion.div>
      </div>
      <div className="p-4 pt-[64px] relative xl:static xl:flex xl:flex-col xl:justify-center xl:items-start">
        <div className="flex relative md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ABOUT RESTAURANT
          </motion.p>
          <div className=" absolute left-[165px] top-[18px]"></div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl pt-4 md:pt-2 pb-8 xl:w-[700px] z-10 md:text-5xl md:leading-[60px] md:-ml-[5px]"
        >
          ENJOY AN EXCEPTIONAL JOURNEY OF TASTE
        </motion.p>
        <img
          className="absolute w-[240px] h-[110px] md:w-[380px] md:h-[170px] md:right-[-130px] md:top-[-50px] right-[-90px] rotate-[-50deg] xl:w-[480px] xl:h-[200px] xl:top-[-13px] xl:right-[-145px] 2xl:w-[650px] 2xl:h-[300px] top-4"
          src={crab}
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 xl:w-[560px] z-10"
        >
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
        </motion.div>
        <button className="bg-fishBlue text-white h-[50px] mt-9 px-6">
          READ MORE ABOUT US
        </button>
      </div>
    </div>
  );
}
