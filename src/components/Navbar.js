import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 px-4 bg-slate-400 text-lg">
      <ul className="flex">
        <li className="ml-2 mr-2 hover:bg-[#ccc]">
          <Link href="#home">HOME</Link>
        </li>
        <li className="ml-2 mr-2 hover:bg-[#ccc]">
          <Link href="#services">SERVICES</Link>
        </li>
        <li className="ml-2 mr-2 hover:bg-[#ccc]">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="ml-2 mr-2 hover:bg-[#ccc]">
          <Link href="#blog">BLOG</Link>
        </li>
        <li className="ml-2 mr-2 hover:bg-[#ccc]">
          <Link href="#faqs">FAQs</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="ml-2 mr-2 hover:bg-[#ccc]">
          <Link href="#cart">CART</Link>
        </li>
        <li className="ml-2 mr-2 hover:bg-[#ccc]">
          <Link href="#login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};
