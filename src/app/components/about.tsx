// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-blue-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="bg-blue-800 shadow-xl rounded-lg p-8 max-w-4xl w-full">
//         <h2 className="text-4xl font-bold text-center text-white mb-6">About Me</h2>
        
//         <div className="flex flex-col items-center md:flex-row md:space-x-8">
//           {/* Image Section */}
//           <div className="w-32 h-32 rounded overflow-hidden mb-4 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
//             <img 
//               src="/my-photo.png" 
//               alt="Wania Siddiqui" 
//               className="object-cover w-full h-full border-4 border-white" 
//             />
//           </div>

//           {/* Text Section */}
//           <div className="md:flex-1 text-center md:text-left">
//             <p className="text-lg text-white mb-4">
//               My name is Wania Siddiqui. I am currently in A-Levels and starting my journey. 
//               I am not a professional expert yet, but I am working hard and determined to 
//               become a rising star. 
//             </p>
//             <p className="text-lg text-white mb-4">
//               I have a strong passion for learning new skills and working on new projects. 
//               I am continuously enhancing my skills in technology, programming, and design.
//             </p>
//             <p className="text-lg text-white mb-4">
//               If you would like to work with me or have any questions, I am ready to connect!
//             </p>
//           </div>
//         </div>
        
//         <div className="text-center mt-8">
//           <a 
//             href="/contact" 
//             className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg text-xl transition duration-300 transform hover:scale-105">
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";

const About = () => {
  return (
    <div className="bg-blue-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-800 shadow-xl rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-6">About Me</h2>
        
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
        
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
            <img 
              src="/my-photo.png" 
              alt="Wania Siddiqui" 
              className="object-cover w-full h-full " 
            />
          </div>

        
          <div className="md:flex-1 text-center md:text-left">
            <p className="text-lg text-white mb-4">
              My name is Wania Siddiqui. I am currently in A-Levels and starting my journey. 
              I am not a professional expert yet, but I am working hard and determined to 
              become a rising star.
            </p>
            <p className="text-lg text-white mb-4">
              I have a strong passion for learning new skills and working on new projects. 
              I am continuously enhancing my skills in technology, programming, and design.
            </p>
            <p className="text-lg text-white mb-4">
              I enjoy challenges and thrive in environments where I can expand my knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
