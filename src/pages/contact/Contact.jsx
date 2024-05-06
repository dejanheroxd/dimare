import React from "react";
import ContactSec from "../home/contace-sec/ContactSec";

export default function Contact() {
  return (
    <div>
      <div class="flex justify-center font-serif xl:pt-14">
        <div class="w-64 xl:w-[550px] flex flex-col text-center xl:text-left items-center pt-12">
          <p class="text-italia text-gray-700 text-3xl pb-6 xl:pb-9">
            Contact Us
          </p>
          <p class="pb-6 text-lg xl:text-xl text-fishDarkBlue">
            500 Terry Francine Street San Francisco, CA 94158
          </p>
          <div class="text-lg xl:text-xl text-fishDarkBlue xl:flex xl:justify-center xl:gap-x-36 xl:w-full">
            <div class="pb-6 xl:leading-9">
              <p>Mon - Fri: 12pm - 10pm</p>
              <p>Saturday: 11am - 10pm</p>
              <p>Sunday: 11am - 11pm</p>
            </div>
            <div>
              <p>dalforno@gmail.com</p>
              <p>148-387-5397</p>
            </div>
          </div>
        </div>
      </div>
      <form
        class="flex flex-col items-center pt-12 pb-24"
        action="https://formspree.io/f/xvojzoly"
        method="POST"
      >
        <div class="xl:w-[550px]">
          <div class="flex flex-col items-center gap-y-3 w-72 xl:w-[550px] xl:grid xl:grid-cols-4 xl:gap-x-3">
            <label class="border-b border-gray-600 w-full xl:col-span-2 sm:hover:border-b-italia">
              <input
                class="pl-6 text-gray-700 focus:outline-none pb-2 w-full"
                type="email"
                name="email"
                placeholder="Email"
              />
            </label>
            <label class="border-b border-gray-600 w-full xl:col-span-2 sm:hover:border-b-italia">
              <input
                class="pl-6 text-gray-700 focus:outline-none pb-2 w-full"
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <label class="border-b border-gray-600 w-full xl:col-span-4 sm:hover:border-b-italia">
              <textarea
                class="pl-6 text-gray-700 focus:outline-none pb-2 xl:pt-2 w-full h-24"
                name="message"
                placeholder="Type you message here..."
              ></textarea>
            </label>
            <button
              class="border hover:bg-white hover:text-fishDarkBlue text-white bg-fishDarkBlue border-gray-700 w-full py-2 xl:col-span-4 sm:hover:text-italia duration-200"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ContactSec />
    </div>
  );
}
