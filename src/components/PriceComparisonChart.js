import React from "react";
import { carPricesData } from "../helper/carPriceData";
const PriceComparisonChart = () => {
  return (
    <div className="flex flex-col my-6">
      <h1 className="text-2xl py-2 font-semibold my-4">
        <span className="border-t-4 border-red-600">Pric</span>e Comparison
        Chart
      </h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 ">Car Brand & Model</th>
            <th className="text-left px-4 py-2">Authorized Service Center</th>
            <th className="text-left px-4 py-2">Local Mechanic</th>
            <th className="text-left px-4 py-2">Tech Mech Guy</th>
          </tr>
        </thead>
        <tbody>
          {carPricesData.map((item, index) => (
            <tr key={index} className="text-lg">
              <td className="text-left px-4 py-2">{item.brand}</td>
              <td className="text-left px-4 py-2 line-through">
                ₹{item.prices["Authorized Service Center"]}
              </td>
              <td className="text-left px-4 py-2 line-through">
                ₹{item.prices["Local Mechanic"]}
              </td>
              <td className="text-left px-4 py-2 text-red-500 font-semibold ">
                ₹{item.prices["Tech Mech Guy"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceComparisonChart;
