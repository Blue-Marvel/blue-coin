import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-4">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className=" my-4 ">
          <div className=" flex flex-col sm:flex-row items-center justify-between">
            <input
              className=" w-full rounded py-3 text-black"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className=" bg-[#00df9a] w-[200px] font-medium rounded-md sm:ml-5 mx-auto py-3 px-6 my-6 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our 
            <span className=" text-[#00df9a] underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
