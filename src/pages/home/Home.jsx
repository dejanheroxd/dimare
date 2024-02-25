import React from "react";
import LandingPage from "./landingPage/LandingPage";
import AboutSec from "./about-sec/AboutSec";
import OpeningTime from "./openingTime-sec/openingTime";
import MenuSec from "./menu-sec/MenuSec";
import ContactSec from "./contace-sec/ContactSec";

export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <AboutSec />
      <OpeningTime />
      <MenuSec />
      <ContactSec />
    </div>
  );
}
