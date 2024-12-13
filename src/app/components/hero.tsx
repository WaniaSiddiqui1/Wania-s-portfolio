
"use client";

 import React, { useEffect, useState } from "react";

// const Hero = () => {
//   const [textSlideIn, setTextSlideIn] = useState(false);
//   const [imageSlideIn, setImageSlideIn] = useState(false);

//   useEffect(() => {
//     // Trigger slide-in animations after component mounts
//     setTextSlideIn(true);
//     setTimeout(() => setImageSlideIn(true), 300); // Delay for image animation
//   }, []);

//   return (
//     <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-10 md:px-20">
//       {/* Text Section */}
//       <div
//         className={`transition-transform duration-1000 ${
//           textSlideIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//         } text-center md:text-left`}
//       >
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//         <p className="text-lg">
//           Discover my projects, experience, and skills. Let’s create something amazing together!
//         </p>
//       </div>

//       {/* Image Section */}
//       <div
//         className={`transition-transform duration-1000 ${
//           imageSlideIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         } flex-shrink-0`}
//       >
//         <img
//           src="/public/my photo.png" // Replace with your image path
//           alt="Hero"
//           className="w-64 md:w-80 rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import Image from "next/image";
// "use client";

// import React, { useEffect, useState } from "react";

// const Hero = () => {
//   const [textSlideIn, setTextSlideIn] = useState(false);
//   const [imageSlideIn, setImageSlideIn] = useState(false);

//   useEffect(() => {
//     // Trigger slide-in animations after component mounts
//     setTextSlideIn(true);
//     setTimeout(() => setImageSlideIn(true), 300); // Delay for image animation
//   }, []);

//   return (
//     <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-navy-800 to-blue-900 text-white py-20 px-10 md:px-20">
//       {/* Text Section */}
//       <div
//         className={`transition-transform duration-1000 ${
//           textSlideIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//         } text-center   md:text-left`}
//       >
//         <h1 className="text-4xl text-blue-800 font-bold mb-4 text-white">Welcome to My Portfolio</h1>
//         <p className="text-lg text-gray-800 ">
//           Discover my projects, experience, and skills. Let’s create something amazing together!
//         </p>
//       </div>

//       {/* Image Section */}
//       <div
//         className={`transition-transform duration-1000 ${
//           imageSlideIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         } flex-shrink-0`}
//       >
        
//         <img
//           src="/public/myphoto.png" // Replace with your actual image path
//           alt="Hero"
//           className="w-64 md:w-80 rounded-lg shadow-lg border-4 border-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
import Image from "next/image";

const Hero = () => {
  const [textSlideIn, setTextSlideIn] = useState(false);
  const [imageSlideIn, setImageSlideIn] = useState(false);

  useEffect(() => {
    setTextSlideIn(true);
    setTimeout(() => setImageSlideIn(true), 300);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-blue-800 to-indigo-950 text-white py-20 px-10 md:px-20">
      {/* Text Section */}
      <div
        className={`transition-transform duration-1000 ${
          textSlideIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } text-center md:text-left`}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">
          Discover my projects, experience, and skills. Let’s create something amazing together!
        </p>
      </div>

      {/* Image Section */}
      <div
        className={`transition-transform duration-1000 ${
          imageSlideIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } flex-shrink-0`}
      >
        <Image
          src="/myphoto.png" 
          alt="Hero"
          width={320} 
          height={320} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
