import { SlideProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const Slide = ({ image, title, mainTitle, price }: SlideProps) => {
  return (
    <div className="outline-none border-none relative py-12">
      <div className="absolute flex flex-col left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] gap-y-2 lg:gap-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-sm">
        {/* <h3 className="text-accent text-[24px] lg:text-3xl">{title}</h3>
        <h2 className="text-blackish text-2xl md:text-3xl lg:text-4xl font-bold">
          {mainTitle}
        </h2>
        <span className="text-2xl text-slate-500">
          Starting at {" "}
          <b className="text-lg md:text-xl lg:text-3xl text-slate-700">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>
        </span>
        <div className="bg-accent max-w-fit w-fit rounded-lg text-white text-sm md:text-base py-2 px-4 inline cursor-pointer">
          Comprar
        </div> */}
      </div>
      <Image src={image} alt="Image Slide" width={2000} height={2000} className="rounded-sm selection:bg-transparent object-cover" />
    </div>
  );
};

export default Slide;
