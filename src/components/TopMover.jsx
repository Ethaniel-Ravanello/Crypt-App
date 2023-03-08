import React from "react";

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
      <div className="flex">
        <div>
          {dataSlice
            .sort((a, b) => (a.currencyGroup > b.currencyGroup ? 1 : -1))
            .map((data) => {
              return (
                <ul>
                  <li>{data.currencyGroup}</li>
                </ul>
              );
            })}
        </div>

        <div>
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
                return (
                  <ul>
                    <li>{data.day}</li>
                  </ul>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default TopMover;
