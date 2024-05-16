import React from "react";
import { reviewData } from "../helper/reviewData";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col my-6">
      <h1 className="text-2xl py-2 font-semibold my-4">
        <span className="border-t-4 border-red-600">Custo</span>mer Reviews
      </h1>

      <ul className="flex flex-wrap">
        {reviewData.map((item) => (
          <ReviewCard key={item.id} reviewDetails={item} />
        ))}
      </ul>
    </div>
  );
};

export default CustomerReviews;
