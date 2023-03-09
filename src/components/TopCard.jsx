import React from "react";

const TopCard = ({ price, day, data }) => {
  return (
    <div className="w-[180px] h-fit mx-auto p-5 hover:bg-input transition ease-in-out delay-150 mt-10 rounded-lg">
      {data.map((data) => (
        <p>{data.name}</p>
      ))}
    </div>
  );
};

export default TopCard;
