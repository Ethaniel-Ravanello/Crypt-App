import React from "react";

import TopCard from "./TopCard";

const TopMover = ({ data, price }) => {
  let dataSlice = data.slice(2, 8);
  let dataSorted = dataSlice
    .sort((a, b) => (a.currencyGroup > b.currencyGroup ? 1 : -1))
    .map((data) => {
      return {
        name: data.currencyGroup,
        logo: data.logo,
      };
    });

  console.log(dataSorted);

  return (
    <div>
      <p className="font-bold text-xl">🔥 Top Movers (24 Jam)</p>
      <div className="flex justify-between gap-14">
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
      </div>
    </div>
  );
};

export default TopMover;
