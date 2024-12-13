import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Explore My Projects</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project 1 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">Project 1</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Description of Project 1 goes here. Briefly describe the project and its purpose.
            </p>
            <div className="mt-4 text-center">
              <a
                href="https://hackathon-temp2-figma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-xl transition duration-300 transform hover:scale-105"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1.2s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">Project 2</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Description of Project 2 goes here. Briefly describe the project and its purpose.
            </p>
            <div className="mt-4 text-center">
              <a
                href="https://coffee-web-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-xl transition duration-300 transform hover:scale-105"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1.4s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">Project 3</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Description of Project 3 goes here. Briefly describe the project and its purpose.
            </p>
            <div className="mt-4 text-center">
              <a
                href="https://resume-by-wania-siddiqui-milestone.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-xl transition duration-300 transform hover:scale-105"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1.6s">
            <h3 className="text-2xl font-semibold text-center text-blue-100 mb-4">Project 4</h3>
            <div className="w-full h-1 bg-gray-400 mb-4"></div>
            <p className="text-lg text-center text-gray-200">
              Description of Project 4 goes here. Briefly describe the project and its purpose.
            </p>
            <div className="mt-4 text-center">
              <a
                href="https://milestone4-wania-siddiqui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-xl transition duration-300 transform hover:scale-105"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
