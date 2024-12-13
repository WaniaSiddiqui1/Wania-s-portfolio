import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold text-center text-white mb-8">My Skills</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* HTML Skill Card */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">HTML</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Strong knowledge of HTML5, building the structure of web pages with semantic tags.
            </p>
          </div>

          {/* CSS Skill Card */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1.2s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">CSS</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Expertise in CSS3 and advanced styling techniques like Flexbox, Grid, and animations.
            </p>
          </div>

          {/* JavaScript Skill Card */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1.4s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">JavaScript</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Proficient in JavaScript, focusing on both ES6+ syntax and asynchronous programming.
            </p>
          </div>

          {/* Next.js Skill Card */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1.6s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">Next.js</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Experienced in building fast, SEO-friendly applications using Next.js and server-side rendering.
            </p>
          </div>

          {/* React Skill Card */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1.8s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">React</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Passionate about building interactive UIs and state management using React and hooks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
