import React from "react";
import ChartDetail from "./ChartDetail";

const Chart = () => {
  return (
    <div className="bg-primaryLight text-secondary flex flex-col p-8 rounded-2xl justify-between items-center w-full max-w-lg">
      <div className="font-bold text-4xl self-start">
        Spending - Last 7 days
      </div>

      <div className="flex justify-center items-center h-60 w-full">
        <ChartDetail />
      </div>

      <hr className="w-full my-8" />

      <div className="flex w-full justify-between">
        <div>
          <div className="text-secondaryLight">Total this month</div>
          <div className="text-5xl font-bold">$478.33</div>
        </div>

        <div className="mt-6 text-md text-right">
          <div className="font-bold">+2.4%</div>
          <div className="text-secondaryLight">from last month</div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
