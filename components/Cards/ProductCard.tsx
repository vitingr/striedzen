import { ProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="rounded-md bg-slate-50 px-4 py-8 flex flex-col w-full">
      <div className="flex w-full justify-between items-center">
        <div className="bg-rose-50 text-red-400 rounded-xl text-xs px-2 py-1 font-bold uppercase">
          new
        </div>
        <IoIosHeart size={15} className="gray-icon cursor-pointer" />
      </div>
      <picture className="w-full flex items-center justify-center mt-4">
        <Image
          alt="Product Image"
          src={product.image}
          width={200}
          height={200}
          className="object-contain"
        />
      </picture>
      <article className="mt-4">
        <span className="text-xs text-slate-500">{product.brand}</span>
        <h3 className="font-bold text-sm">{product.title}</h3>
      </article>
      <div className="flex justify-between items-center w-full mt-4">
        <span className="w-full text-2xl">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <div className="flex items-center gap-x-1">
          <FaStar className="gold-icon cursor-pointer" size={12} />
          <FaStar className="gold-icon cursor-pointer" size={12} />
          <FaStar className="gold-icon cursor-pointer" size={12} />
          <FaStar className="gold-icon cursor-pointer" size={12} />
          <FaStar className="gold-icon cursor-pointer" size={12} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
