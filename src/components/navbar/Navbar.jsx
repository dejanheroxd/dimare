import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  function navToggle() {
    setNavActive((prev) => !prev);
  }

  function closeNav() {
    setNavActive(false);
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
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
  };

  const mobileLinksVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.2, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.4, ease: [0, 0.55, 0.45, 1] },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="flex relative z-10 justify-between px-6 items-center pt-6">
      <button className="bg-fishBlue px-8 py-2 text-white hidden md:flex">
        <p>RESERVE</p>
      </button>
      <div className="sm:block md:hidden absolute top-5 left-6">
        <p className="font-semibold text-lg text-white">IL MONDO DI MARE</p>
      </div>
      <AnimatePresence>
        {navActive && (
          <motion.nav
            variants={navVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute origin-top w-full md:w-[500px] md:justify-center text-white md:relative md:h-full top-0 bottom-0 right-0 h-screen md:flex text-xl bg-fishBlue md:bg-transparent"
          >
            <motion.ul
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="md:flex h-full flex flex-col md:flex-row  gap-y-6 items-center justify-center md:gap-x-12"
            >
              <Link
                onClick={() => closeNav()}
                to="/"
                className="overflow-hidden"
              >
                <motion.li variants={mobileLinksVars}>HOME</motion.li>
              </Link>
              <Link
                onClick={() => closeNav()}
                to="/about"
                className="overflow-hidden"
              >
                <motion.li variants={mobileLinksVars}>ABOUT</motion.li>
              </Link>
              <Link
                onClick={() => closeNav()}
                to="/menu"
                className="overflow-hidden"
              >
                <motion.li variants={mobileLinksVars}>MENU</motion.li>
              </Link>
              <Link
                onClick={() => closeNav()}
                to="/contact"
                className="overflow-hidden"
              >
                <motion.li variants={mobileLinksVars}>CONTACT</motion.li>
              </Link>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="hidden md:flex items-center">
        <p>
          <Phone size={32} color="white" />
        </p>
        <p className="text-white">+ 04 640 534 394</p>
      </div>
      <button
        onClick={() => navToggle()}
        className="absolute md:hidden right-6 top-7"
      >
        <span
          className={`bg-white duration-300 w-6 h-[2px] mb-1 block ${
            navActive ? "rotate-45 translate-y-[6px]" : ""
          }`}
        ></span>
        <span
          className={`bg-white duration-300 w-6 h-[2px] mb-1 block ${
            navActive ? "hidden" : ""
          }`}
        ></span>
        <span
          className={`bg-white duration-300 w-6 h-[2px] mb-1 block ${
            navActive ? "-rotate-45 " : ""
          }`}
        ></span>
      </button>
    </div>
  );
}
