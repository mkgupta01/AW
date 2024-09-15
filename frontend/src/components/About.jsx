import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-violet-300 to-sky-400 md:h-[43rem] h-[55rem] w-full flex flex-col justify-evenly items-center">
      <div className="bg-white w-[20rem] sm:w-[90%] md:w-[36rem] py-6 sm:py-8 px-6 sm:px-8 md:py-10 md:px-14 rounded-lg text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Fruits.ai</h1>
        <p className="text-sm sm:text-base">
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
        </p>
        <div className="bg-black text-white py-1 text-base sm:text-lg rounded-lg mt-8">About</div>
      </div>
    </div>
  );
}

export default About;
