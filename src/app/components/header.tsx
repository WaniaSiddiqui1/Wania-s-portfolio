
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-blue-900 text-white shadow-md">
//       <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="text-xl font-bold">Wania&apos;s Portfolio</div>
        
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-6">
//           <Link href="/hero" className="hover:text-blue-200">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-blue-200">
//             About
//           </Link>
//           <Link href="/experience" className="hover:text-blue-200">
//             Experience
//           </Link>
//           <Link href="/Skills" className="hover:text-blue-200">
//             Skills
//           </Link>
//           <Link href="/projects" className="hover:text-blue-200">
//             Projects
//           </Link>
//         </div>

//         <button
//           className="md:hidden text-white bg-yellow-500 rounded p-1 focus:outline-none hover:bg-yellow-500"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-blue-900">
//           <Link href="/hero" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
//             Home
//           </Link>
//           <Link href="/about" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
//             About
//           </Link>
//           <Link href="/experience" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
//             Experience
//           </Link>
//           <Link href="/skills" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
//             Skills
//           </Link>
//           <Link href="/projects" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
//             Projects
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <nav className="contain
er mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Wania&apos;s Portfolio</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/hero" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-200">
            About
          </Link>
          <Link href="/experience" className="hover:text-blue-200">
            Experience
          </Link>
          <Link href="/skills" className="hover:text-blue-200">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-blue-200">
            Projects
          </Link>
        </div>

        <button
          className="md:hidden text-white bg-yellow-500 rounded p-1 focus:outline-none hover:bg-yellow-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900">
          <Link href="/hero" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/experience" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
            Experience
          </Link>
          <Link href="/skills" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
          <Link href="/projects" className="block w-full text-left px-4 py-2 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;