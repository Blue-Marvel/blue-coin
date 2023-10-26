import React from "react";
import Person from "../assets/person.png";
import Community from "../assets/community.png";
import Ubuntu from "../assets/ubuntu.png";

const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1204px] mx-auto grid md:grid-cols-3 gap-3">
        <Card
          user="Multiple user"
          image={Community}
          price={189}
          gig={300}
          granted={1}
          sendGig={2}
        />
        <Card
          user="Single user"
          image={Person}
          price={189}
          gig={300}
          granted={1}
          sendGig={2}
        />
        <Card
          user="Cross-platform user"
          image={Ubuntu}
          price={189}
          gig={300}
          granted={1}
          sendGig={2}
        />
      </div>
    </div>
  );
};

const Card = ({ user, image, price, gig, granted, sendGig }) => {
  return (
    <div className=" w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300">
      <img
        src={image}
        alt="ubuntu"
        className=" w-20 mx-auto mt-[-3rem] bg-white"
      />
      <h2 className=" text-2xl font-bold text-center py-8">{user}</h2>
      <p className=" text-center text-4xl text-bold">${price}</p>
      <div className=" text-center font-medium">
        <p className=" py-2 border-b mx-8 mt-8">{gig} GB Storage</p>
        <p className=" py-2 border-b mx-8">{granted} Granted User</p>
        <p className=" py-2 border-b mx-8">Send up to {sendGig} GB</p>
      </div>
      <button className=" bg-[#00b2df] mx-auto py-3 px-6 my-6 rounded-lg">
        Start Trial
      </button>
    </div>
  );
};

export default Cards;
