import ProductDetails from "@/components/Popups/ProductDetails/ProductDetails";
import { ProductProps } from "@/types/types";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const AdminProductCard = ({ item }: { item: ProductProps }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showState, setShowState] = useState<boolean>(false)

  return (
    <>
      <div
        className={`w-full px-4 flex flex-between items-center gap-x-4 text-sm py-3 border-b border-zinc-100 ${
          isHovered ? "bg-slate-100 border-zinc-200" : "bg-white"
        }`}
      >
        <div
          className={`max-w-4 h-4 w-full transition-all duration-300 ease border border-slate-300 rounded-sm cursor-pointer ${
            isHovered ? "bg-accent border-rose-400" : "bg-transparent"
          }`}
          onClick={() => {
            setIsHovered(!isHovered);
          }}
        >
          <IoCheckmark
            className={`${isHovered ? "flex" : "hidden"} white-icon`}
          />
        </div>
        <h3 className="w-full max-w-[140px]">{item.title}</h3>
        <span className="w-full max-w-[140px] font-semibold">
          {formatCurrency(item.price)}
        </span>
        <span className="w-full max-w-[180px]">
          {item.price} unidades restantes
        </span>
        <div className="w-full flex justify-end">
          <button className="bg-slate-700 transition-all duration-300 hover:bg-slate-800 text-xs text-white rounded-md px-4 py-2 cursor-pointer" onClick={() => setShowState(!showState)}>
            Mais Informações
          </button>
        </div>
      </div>
      <ProductDetails setShowState={setShowState} showState={showState} content={item} />
    </>
  );
};

export default AdminProductCard;
