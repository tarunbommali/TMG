import React from "react";
import { APOSTROPHE_IMG_URL } from "../constants/constants";

const ReviewCard = ({ reviewDetails }) => {
  const { tag, review, source, workshopName } = reviewDetails;
  const { name, sourceName, sourceImgUrl } = source;
  return (
    <li className="flex flex-col w-[420px] bg-[#f6f6f6] px-4 py-6 border border-[#e8e8e8] rounded-lg mx-2">
      <h1 className="text-center font-semibold text-xl py-2">
        <img
          className="w-[20px] h-[20px]"
          src={APOSTROPHE_IMG_URL}
          alt="hypen"
        />
        {tag}
      </h1>
      <p className=" text-[#757575]">{review}</p>
      <div className="flex items-center border-b-[1px] py-2 border-gray-400 mt-4">
        <img
          src={sourceImgUrl}
          alt="source"
          className="w-[40px] h-[40px] mr-3"
        />
        <div className="flex flex-col ">
          <h1 className="font-medium">{name}</h1>
          <p className="text-sm text-[#696969]">{sourceName}</p>
        </div>
      </div>
      <div>
        <h1 className="text-[#808080]">Workshop</h1>
        <p>{workshopName}</p>
      </div>
    </li>
  );
};

export default ReviewCard;
