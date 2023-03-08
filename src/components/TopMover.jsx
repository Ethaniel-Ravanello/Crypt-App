import React from "react";

const TopMover = ({ data, price }) => {
  let dataSlice = data.slice(2, 8);
  let priceSlice = price.slice(2, 8);
  console.log(dataSlice);
  return (
    <div>
      <p className="font-bold text-xl">🔥 Top Movers (24 Jam)</p>
      {dataSlice
        .sort((a, b) => (a.currencyGroup > b.currencyGroup ? 1 : -1))
        .map((data) => {
          return (
            <ul>
              <li>{data.currencyGroup}</li>
            </ul>
          );
        })}
      {price
        .sort((a, b) => (a.pair > b.pair ? 1 : -1))
        .map((data) => {
          if (data.pair === "bnb/idr" || data.pair === "comp/idr") {
            return (
              <ul>
                <li>{data.pair}</li>
              </ul>
            );
          }
        })}
    </div>
  );
};

export default TopMover;
