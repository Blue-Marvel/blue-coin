import React from "react";
import Cloud from '../assets/cloud.jpg'

const Analytics = () => {
  return (
    <div className=" bg-white w-full py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          src={Cloud}
          alt="cloud image"
          className=" w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center sm:px-5">
          <p className=" text-[#00b2df] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className=" font-bold md:text-4xl sm:text-3xl text-xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            corrupti nostrum deserunt assumenda, saepe nihil corporis inventore
            odio expedita cumque iusto. Accusamus nam, officia doloribus
            exercitationem voluptas vitae deserunt error?
          </p>

          <button className=" bg-black w-[200px] font-medium rounded-md mx-auto md:m-0 py-3 my-6 text-[#00b2df]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
