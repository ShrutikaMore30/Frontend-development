import React from 'react';

const Icons = () => {
  return (
    <div id="contact" className="py-12  ">
      <div className="container mx-auto px-4 max-w-5xl py-[0px]">
       

        {/* Contact Info in one line */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-center md:text-left">
        <h3 className="text-4xl font-semibold text-center mb-4">Contact Me:</h3>
          
          {/* Email */}
          <div>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:contact@example.com" className=" text-blue-600 dark:text-[#ff004f] hover:underline">
                contact@example.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div>
            <p><span className="font-semibold">Phone:</span> 9579117968</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-4xl">
            <a href="https://instagram.com/" className="hover:text-blue-600 hover:dark:text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/in/shrutikamore" className="hover:text-blue-600 hover:dark:text-pink-600">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/shrutikamore" className="hover:text-blue-600 hover:dark:text-pink-600">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-gray-800 text-white text-center p-4 z-50">
  <p>&copy; 2025 Shrutika. All rights reserved.</p>
</div>


      
    </div>
  );
};

export default Icons;
