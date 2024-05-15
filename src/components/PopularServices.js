import { popularServicesData } from "../helper/popularServicesData";
import PopularServiceCard from "./PopularServiceCard";

const PopularServices = () => {
  return (
    <div className="flex flex-col my-6">
      <h1 className="text-2xl py-2 font-semibold my-4"><span className="border-t-4 border-red-600">Popu</span>lar Service</h1>
      <ul className="w-[70vw] flex flex-wrap">
        {popularServicesData.map((item) => (
          <PopularServiceCard key={item.id} serviceDetails={item} />
        ))}
      </ul>
    </div>
  );
};

export default PopularServices;
