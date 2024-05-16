import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { popularServicesData } from "../helper/popularServicesData";
import PopularServiceCard from "./PopularServiceCard";
import { carouselResponsive } from "../helper/carouselResponsive";
import CustomButtonGroup from "./CustomButtonGroup";

const lightColors = [
  "#FFDDC1", // Light Peach
  "#FFCCBC", // Light Coral
  "#E1F5FE", // Light Blue
  "#E0F7FA", // Light Cyan
  "#F1F8E9", // Light Green
  "#FFF9C4", // Light Yellow
  "#FFECB3", // Light Amber
  "#F8BBD0", // Light Pink
  "#EDE7F6", // Light Purple
  "#D7CCC8", // Light Brown
];
const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const PopularServices = () => {
  return (
    <div className="flex flex-col my-6  relative w-[90vw]">
      <h1 className="text-2xl py-2 font-semibold my-4">
        <span className="border-t-4 border-red-600">Popu</span>lar Service
      </h1>
      <div className="flex justify-center items-center ">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={true}
          className="mx-6 w-[80vw]"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          customButtonGroup={<CustomButtonGroup />}
          renderDotsOutside={false}
          responsive={carouselResponsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {popularServicesData.map((item) => (
            <PopularServiceCard
              key={item.id}
              serviceDetails={item}
              lightColor={getRandomColor(lightColors)}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularServices;
