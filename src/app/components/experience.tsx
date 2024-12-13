import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold text-center text-white mb-8">My Experience</h2>
      <div className="max-w-6xl mx-auto px-4">
        <ul className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {/* Experience 1 */}
          <li className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-100">Web Development</h3>
            <p className="text-lg text-center text-gray-200">
              I have built several websites using React, Next.js, and modern web technologies.
            </p>
          </li>

          {/* Experience 2 */}
          <li className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-100">UI/UX Design</h3>
            <p className="text-lg text-center text-gray-200">
              I specialize in creating intuitive user interfaces and experiences using tools like Figma and Adobe XD.
            </p>
          </li>

          {/* Experience 3 */}
          <li className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-100">Mobile App Design</h3>
            <p className="text-lg text-center text-gray-200">
              I have experience designing mobile applications, focusing on user-centric design and seamless experiences.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
