// import React from "react";
// import shrimpGround from "../../../assets/shrimp.jpg";
// import Navbar from "../../../components/navbar/Navbar";

// export default function LandingPage() {
//   return (
//     <div className="h-screen relative">
//       <div
//         className="absolute inset-0 z-[-1]"
//         style={{
//           backgroundImage: `url(${shrimpGround})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           filter: "brightness(0.68)",
//         }}
//       />
//       <Navbar />
//       <div className="absolute flex-col inset-0 flex justify-center items-center">
//         <header className="text-white text-center text-3xl w-[400px] font-bold">
//           <p>
//             DISCOVER SEAFOOD{" "}
//             <span className="font-['Lobster']">Perfection</span>
//           </p>
//         </header>
//         <button className="bg-fishBlue h-[42px] px-2 mt-3 text-white">
//           DISCOVER MENU
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import shrimpGround from "../../../assets/shrimp.jpg";
import Navbar from "../../../components/navbar/Navbar";

export default function LandingPage() {
  return (
    <div className="h-screen relative">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${shrimpGround})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(0.68)",
        }}
      />
      <Navbar />
      <div className="absolute flex-col inset-0 flex justify-center items-center">
        <header className="text-white text-center text-3xl w-screen font-bold">
          <p>
            DISCOVER SEAFOOD{" "}
            <span className="font-['Lobster']">Perfection</span>
          </p>
        </header>
        <button className="bg-fishBlue h-[50px] px-6 mt-3 text-white">
          DISCOVER MENU
        </button>
      </div>
    </div>
  );
}
