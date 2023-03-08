import React from "react";

const TopCard = () => {
  return (
    <div className="w-[180px] h-fit mx-auto p-5 hover:bg-input transition ease-in-out delay-150 mt-10 rounded-lg">
      <div className="flex">
        <img src="/BTC.png" alt="Logo" className="w-10 h-10 object-cover" />
        <p className="pt-2 ml-3 font-semibold text-xl">BTC</p>
      </div>
      <p className="text-price ml-1 mt-2">Rp. 3.500</p>
    </div>
  );
};

export default TopCard;
