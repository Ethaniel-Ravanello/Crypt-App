import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="py-5 font-bold text-3xl">
          PIN<span className="text-icon">TU</span>
        </div>

        <div className="w-[60%] flex justify-between pt-1">
          <div className="p-5 font-normal text-md pt-6">
            <p>
              Fitur{" "}
              <span className="bg-baru text-white p-2 rounded-lg ml-2">
                Baru
              </span>
            </p>
          </div>
          <div className="p-5 font-normal text-md pt-6">
            <p>PTU</p>
          </div>
          <div className="p-5 font-normal text-md pt-6">
            <p>Edukasi</p>
          </div>
          <div className="p-5 font-normal text-md pt-6">
            <p>Ikuti Kami</p>
          </div>
          <div className="p-5 font-normal text-md pt-6">
            <p>Blog & News</p>
          </div>
          <div className="p-5 font-normal text-md pt-6">
            <p>Karir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
