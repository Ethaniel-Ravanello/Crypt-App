import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

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

  return (
    <div className="w-[70%] mx-auto">
      <Navbar />
      <div className="w-full mt-[50px] flex justify-between">
        <p className="font-bold text-3xl pt-2">
          Harga Crypto dalam Rupiah hari ini
        </p>
        <div className="relative">
          <input
            className="bg-input h-full px-2 py-3.5 rounded-lg w-[300px]"
            type="text"
            placeholder="Search"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
