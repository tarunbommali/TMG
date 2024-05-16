import React from 'react';
import { IoArrowBackCircleSharp ,IoArrowForwardCircleSharp} from "react-icons/io5";

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="absolute w-[90vw] top-1/2 transform -translate-y-1/2 flex justify-between pointer-events-none">
      <button
        onClick={previous}
        className=" bg-opacity-50  text-4xl text-[#4a4a4a] cursor-pointer pointer-events-auto p-2 "
      >
        <IoArrowBackCircleSharp/>
      </button>
      <button
        onClick={next}
        className=" bg-opacity-50  text-4xl text-[#4a4a4a] cursor-pointer pointer-events-auto p-2 "
      >
        <IoArrowForwardCircleSharp/>
      </button>
    </div>
  );
};

export default CustomButtonGroup;
