import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const Offer = () => {
  return (
    <div className="pt-[165px] py-4 w-full flex justify-center items-center bg-zinc-100 cursor-pointer transition-all duration-300 hover:bg-zinc-200">
      <div className="flex gap-x-4 items-center">
        <MdOutlineShoppingBag className="gray-icon cursor-pointer" size={22} />
        <p className="text-slate-700 text-sm">
          <span className="text-slate-700 font-semibold text-lg">
            Aproveite
          </span>{" "}
          a nossa promoção de{" "}
          <span className="text-slate-700 font-semibold text-lg">Verão</span>
        </p>
      </div>
    </div>
  );
};

export default Offer;
