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

  console.log(dataSorted.name);

  return (
    <div>
      <p className="font-bold text-xl">🔥 Top Movers (24 Jam)</p>
      <div className="flex justify-between gap-14">
        {price
          .sort((a, b) => (a.pair > b.pair ? 1 : -1))
          .map((data) => {
            if (
              data.pair === "bnb/idr" ||
              data.pair === "comp/idr" ||
              data.pair === "eth/idr" ||
              data.pair === "link/idr" ||
              data.pair === "snx/idr" ||
              data.pair === "usdt/idr"
            ) {
              return <p>{data.pair}</p>;
            }
          })}
        {dataSorted.map((data) => {
          return <p>{data.name}</p>;
        })}
      </div>
    </div>
  );
};

export default TopMover;
