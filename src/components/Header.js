import React from "react";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between py-3 px-4 ">
      <h1 className="text-2xl text-red-600 font-bold">The Mech Guy</h1>
      <div className="flex items-center text-xl text-[#757575] font-semibold">
        <IoIosCall className="mx-2" />
        <h1>+91 8639393214</h1>
      </div>
    </div>
  );
};

export default Header;
