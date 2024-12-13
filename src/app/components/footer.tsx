import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="container mx-auto px-4 text-center md:text-left">
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Contact Me</h3>
            <p>Email: <a href="mailto:wania@example.com" className="hover:underline">wania.siddiquim11@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:underline">0316-1122646</a></p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/waniasiddiquihttps://www.linkedin.com/in/wania-siddiqui-92b429311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/WaniaSiddiqui1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/waniasiddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>

  
{/* Social Links with Text */}
<div className="flex justify-center space-x-6 mb-4">
  <a
    href="https://github.com/WaniaSiddiqui1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-300 text-lg"
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/wania-siddiqui-92b429311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-300 text-lg"
  >
    LinkedIn
  </a>
</div>
       {/* Divider */}
<div className="my-4 border-t border-blue-400"></div>


        {/* Copyright */}
        <div className="mt-4">
          <p className="text-sm">&copy; 2024 Wania Siddiqui. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
