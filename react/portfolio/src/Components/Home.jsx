import react from 'react'
import majestyImg from "../assets/one.jpg"; 


function Home() {    
      return (
        <section className="flex flex-col md:flex-row-reverse items-center justify-center px-8 py-10 transition-all duration-500">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 md:ml-10 mt-10 md:mt-0 flex justify-center">
            <img
              src={majestyImg}
              alt="Majesty"
              className="w-100 h-100 rounded-full object-cover shadow-lg"
            />
          </div>
    
          {/* Text + Buttons */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 md:ml-40">
            <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Shrutika More 👑</h1>
            <p className="text-lg md:text-xl">
              Front-End Developer crafting beautiful & responsive UIs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="inffff.pdf"
                download
                className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded shadow-md hover:scale-105 transition-transform duration-300"
              >
                Download CV
              </a>
              <a
                href="#certificates"
                className="px-6 py-2 border border-black dark:border-white rounded text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
              >
                My Certificates
              </a>
            </div>
          </div>
        </section>
      );
    }
    
    
  export default Home;
  