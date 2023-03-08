import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import TopMover from "./components/TopMover";

import Search from "./assets/search.svg";

function App() {
  const [crypto, setCrypto] = useState([]);
  const [prices, setPrices] = useState([]);

  const getData = async () => {
    const value = await fetch(
      "https://api.pintu.co.id/v2/wallet/supportedCurrencies "
    );
    const prices = await value.json();
    const data = prices.payload;
    setCrypto(data);
  };

  const getPrice = async () => {
    const value = await fetch(
      "https://api.pintu.co.id/v2/trade/price-changes "
    );
    const prices = await value.json();
    const harga = prices.payload;
    setPrices(harga);
  };

  useEffect(() => {
    getData();
    getPrice();
  }, []);

  console.log(prices);

  return (
    <div className="w-[70%] mx-auto">
      <Navbar />
      <div className="w-full mt-[50px] flex justify-between">
        <p className="font-bold text-3xl pt-2">
          Harga Crypto dalam Rupiah hari ini
        </p>
        <div className="bg-input mt-1.5 pl-7 pr-2 py-3.5 rounded-lg w-[300px] h-[50px] relative cursor-pointer">
          <img
            className="w-5 h-5 absolute left-3 top-[17px]"
            src={Search}
            alt="Search Icon"
          />
          <p className="pl-3 text-placeholder">Cari Aset Pintu</p>
        </div>
      </div>
      <div className="w-full mt-10">
        <TopMover data={crypto} price={prices} />
      </div>
    </div>
  );
}

export default App;
