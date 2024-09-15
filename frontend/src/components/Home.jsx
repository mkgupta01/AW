import React from "react";
import { Link } from "react-router-dom"; // Import Link
import icon from '../assests/icon.png';

const HomePage = () => {
  const boxStyles = "h-[10rem] w-[10rem] rounded-lg mx-4 flex justify-center items-center";

  return (
    <div className="bg-gradient-to-r from-violet-300 to-sky-400 md:h-[43rem] h-[55rem] w-full flex flex-col justify-evenly items-center">
      <div className="text-center">
        <h6 className="text-3xl font-semibold text-white">Fruit AI</h6>
        <span className="text-white">"Be Healthy!"</span>

        <div className="my-6 md:mt-14 md:h-[28rem] md:w-[40rem] h-[38rem] flex flex-wrap justify-evenly">
          <Link to="/chat" className={`${boxStyles} bg-orange-300 shadow-[5px_5px_15px_5px_rgba(255,165,0,0.4)] text-center font-extrabold text-purple-700 text-5xl`}>
            Chat
          </Link>
          <Link to="/faqs" className={`${boxStyles} bg-red-200 shadow-[5px_5px_15px_5px_rgba(255,0,0,0.4)]`}>
            
          </Link>
          <Link  className={`${boxStyles} bg-green-200 shadow-[5px_5px_15px_5px_rgba(0,255,0,0.4)]`}>
            
          </Link>
          <Link  className={`${boxStyles} bg-blue-300 shadow-[5px_5px_15px_5px_rgba(0,0,255,0.4)]`}>
            <img src={icon} alt="Icon" className="h-28 w-28" />
          </Link>
          <Link to="/faqs" className={`${boxStyles} bg-yellow-300 shadow-[5px_5px_15px_5px_rgba(255,255,0,0.4)] text-center font-extrabold text-gray-500 text-5xl`}>
            FAQs
          </Link>
          <Link to="/about" className={`${boxStyles} bg-purple-300 shadow-[5px_5px_15px_5px_rgba(128,0,128,0.4)] text-center font-extrabold text-purple-700 text-4xl`}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
