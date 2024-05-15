import React from "react";

const CarRepairPriceList = () => {
  return (
    <div className="flex flex-col my-6">
      <h1 className="text-2xl py-2 font-semibold my-4">
        <span className="border-t-4 border-red-600">Car R</span>epair Price List
        in India 2024
      </h1>

      <table>
        <tr className="flex justify-between border border-[#dddddd] py-2 px-4 mx-2">
          <th>Car Service List</th>
          <th>Price Starts From (₹)</th>
        </tr>
        <tr className="flex justify-between border border-[#dddddd] py-2 px-4 mx-2">
          <td>1. COMPREHENSIVE CAR REPAIR</td>
          <td>Rs.5699</td>
        </tr>
        <tr className="flex justify-between border border-[#dddddd] py-2 px-4 mx-2">
          <td>2. BASIC CAR REPAIR</td>
          <td>Rs.2899</td>
        </tr>
        <tr className="flex justify-between border border-[#dddddd] py-2 px-4 mx-2">
          <td>3. STANDARD CAR REPAIR</td>
          <td>Rs.3599</td>
        </tr>
      </table>
      <p className="text-[11px] py-2  mx-2">This data was last updated on 15/05/2024</p>
    </div>
  );
};

export default CarRepairPriceList;
