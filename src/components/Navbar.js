import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 px-4 bg-[#3f4347] text-white text-lg">
      <ul className="flex">
        <li className="mr-2 px-2 py-1  hover:bg-[#dc2626] rounded-lg ">
          <Link href="#home">HOME</Link>
        </li>
        <li className="ml-2 mr-2 px-2 py-1 hover:bg-[#dc2626] rounded-lg ">
          <Link to="/services">SERVICES</Link>
        </li>
        <li className="ml-2 mr-2 px-2 py-1 hover:bg-[#dc2626] rounded-lg ">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="ml-2 mr-2 px-2 py-1 hover:bg-[#dc2626] rounded-lg ">
          <Link to="blogs">BLOG</Link>
        </li>
        <li className="ml-2 mr-2 px-2 py-1 hover:bg-[#dc2626] rounded-lg ">
          <Link to="/faq">FAQs</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="ml-2 mr-2 px-2 py-1 hover:bg-[#dc2626] rounded-lg ">
          <Link href="#cart">CART</Link>
        </li>
        <li className="ml-2 mr-2 px-2 py-1 hover:bg-[#dc2626] rounded-lg ">
          <Link href="#login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};
