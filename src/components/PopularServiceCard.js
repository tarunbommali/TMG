import React from "react";
import { MdShowChart } from "react-icons/md";

const PopularServiceCard = ({ serviceDetails, lightColor }) => {
  const { serviceName, tag, imgUrl, bookingCount } = serviceDetails;
  return (
    <li
      className="flex justify-center items-center w-[300px] h-[350px] flex-col border border-[#e6e6e6] shadow-md rounded-lg"
      style={{
        background: `linear-gradient(to bottom, white, ${lightColor})`,
      }}
    >
      <h1 className="text-2xl font-bold">{serviceName}</h1>
      <p className="text-xl font-semibold shadow-lg p-2 my-2 bg-white rounded-lg ">
        {tag}
      </p>
      <img
        src={imgUrl}
        alt={serviceName}
        className="w-[100px] h-[100px] my-3"
      />
      <div className="flex items-center bg-white px-4 py-1 mt-2 rounded-lg">
        <MdShowChart className="fill-green-500 mx-1" />
        <span className="text-green-500 mx-1">{bookingCount} </span> Bookings
        happend
      </div>
    </li>
  );
};

export default PopularServiceCard;
