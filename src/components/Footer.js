import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex flex-col   text-lg justify-around  h-[120px] text-white bg-[#282828]">
      <div className="flex justify-around items-center border-b-[1px] border-[#646464] py-2">
        <h1 className="text-red-200 font-bold font-sans text-3xl">
          The Mech Guy
        </h1>
        <h1 className="text-lg">+91-8639393214</h1>
        <ul className="flex items-center">
          <li className="mx-4 text-3xl">
            <FaWhatsapp />
          </li>
          <li className="mx-4 text-3xl">
            <MdEmail />
          </li>

          <li className="mx-4 text-3xl">
            <CiLocationOn />
          </li>
        </ul>
      </div>
      <p className="text-center py-2 text-sm">
        © 2024 || Project On Online Car Services Booking
      </p>
    </div>
  );
};

export default Footer;
