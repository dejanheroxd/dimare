import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "phosphor-react";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  function navToggle() {
    setNavActive((prev) => !prev);
  }

  useEffect(() => {
    const isLargerScreen = window.matchMedia("(min-width: 768px)");

    function handleResize() {
      if (isLargerScreen.matches) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    }

    handleResize();

    isLargerScreen.addEventListener("change", handleResize());

    return () => {
      isLargerScreen.removeEventListener("change", handleResize());
    };
  }, []);

  const navVars = {
    initial: {
      scaleY: 0,
    },

    animate: {
      scaleY: 1,
      transition: { duration: 0.2 },
      ease: [0.12, 0, 0.39, 0],
    },
  };

  return (
    <div className="flex relative justify-between px-6 items-center pt-6">
      <button className="bg-blue-800 px-8 py-2 text-white hidden md:flex">
        <p>RESERVE</p>
      </button>
      <div className="sm:block md:hidden absolute top-5 left-6">
        <p className="font-semibold text-lg">IL MONDO DI MARE</p>
      </div>
      <AnimatePresence>
        {navActive && (
          <motion.nav
            varitants={navVars}
            initial="initial"
            animate="animate"
            className="absolute origin-top w-full md:w-[500px] md:justify-center text-white md:text-black md:relative md:h-full top-0 bottom-0 right-0 h-screen md:flex text-xl bg-fishBlue md:bg-transparent"
          >
            <ul className="md:flex h-full flex flex-col md:flex-row  gap-y-6 items-center justify-center md:gap-x-12">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>MENU</li>
              <li>CONTACT</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="hidden md:flex items-center">
        <p>
          <Phone size={32} />
        </p>
        <p>+ 04 640 534 394</p>
      </div>
      <button
        onClick={() => navToggle()}
        className="absolute md:hidden right-6 top-7"
      >
        <span
          className={`bg-black duration-300 w-6 h-[2px] mb-1 block ${
            navActive ? "rotate-45 translate-y-[6px]" : ""
          }`}
        ></span>
        <span
          className={`bg-black duration-300 w-6 h-[2px] mb-1 block ${
            navActive ? "hidden" : ""
          }`}
        ></span>
        <span
          className={`bg-black duration-300 w-6 h-[2px] mb-1 block ${
            navActive ? "-rotate-45 " : ""
          }`}
        ></span>
      </button>
    </div>
  );
}
