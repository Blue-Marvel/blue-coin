import React from 'react';
import ReactTyped from 'react-typed';

const Hero = () => {
  return (
    <div className=" text-white">
      <div className=" max-w-[800px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className=" flex justify-center items-center py-3">
          <p className=" md:text-5xl sm:text-4xl text-xl">
            Fast, flexibe financing for
          </p>
          <ReactTyped
            className=" md:text-5xl sm:text-4xl text-xl pl-3 text-gray-500"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className=" md:text-2xl text-xl text-gray-500 font-bold">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className=" bg-[#00df9a] w-[200px] font-medium rounded-md mx-auto py-3 my-6 text-black">Get Started</button>
      </div>
    </div>
  );
}

export default Hero