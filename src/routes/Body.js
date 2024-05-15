import Service from "../components/Location";
import FAQ from "../components/FAQ";
import PopularServices from "../components/PopularServices";
import CustomerReviews from "../components/CustomerReviews";
import PriceComparisonChart from "../components/PriceComparisonChart";
import CarRepairPriceList from "../components/CarRepairPriceList";
import CarRepairNearMe from "../components/CarRepairNearMe";

export const Body = () => {
  return (
    <div className="px-11">
      <Service />
      <PopularServices />
      <CustomerReviews />
      <PriceComparisonChart />
      <FAQ />
      <CarRepairNearMe />
      <CarRepairPriceList />
    </div>
  );
};
