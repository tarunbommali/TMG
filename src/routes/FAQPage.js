import { faqMainPageListData } from "../helper/faqMainPageListData";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import React from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex mx-4 w-[95vw]">
      <ul className="flex flex-col my-6 w-[70%]">
        <h1 className="text-2xl py-2 font-semibold my-4">
          <span className="border-t-4 border-red-600">Freq</span>uently Asked
          Question's
        </h1>
        {faqMainPageListData.map((item, index) => (
          <li className="rounded-sm border m-1 border-[#dddddd]" key={item.id}>
            <div
              className="flex justify-between px-2 py-1 bg-[#eaeaea]"
              onClick={() => handleToggle(index)}
            >
              <h1 className="text-lg font-semibold text-[#000000]">
                {item.question}
              </h1>
              <button className="bg-none">
                {activeIndex === index ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </button>
            </div>
            {activeIndex === index && (
              <div className="bg-[#f6f6f6] px-2 py-1">
                <h1>{item.answer}</h1>
              </div>
            )}
          </li>
        ))}
      </ul>

      <img
        src="https://gomechanic.in/assets/img/customerpage/faq.jpg"
        alt="tool"
        className="w-[30%] h-auto"
      />
    </div>
  );
};

export default FAQ;
