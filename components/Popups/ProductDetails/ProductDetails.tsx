import React from "react";
import Popup from "../BasePopup/Popup";
import { ProductProps } from "@/types/types";
import Image from "next/image";

interface ProductDetailsProps {
  showState: any;
  setShowState: any
  content: ProductProps;
}

const ProductDetails = ({ showState, setShowState, content }: ProductDetailsProps) => {
  return (
    <Popup
      title="Mais informações sobre o Produto"
      description="Veja abaixo algumas informações detalhadas e específicas referentes a esse produto"
      showState={showState}
      setShowState={setShowState}
    >
      <div className="w-full flex flex-col items-center">
        <picture>
          <Image src={content.image} alt={content.image} width={150} height={150} className="rounded-sm transition-all duration-300 hover:scale-105 selection:bg-transparent" />
        </picture>
        <article className="w-full flex flex-col items-center text-slate-700">
          <span className="text-sm mt-8">{content.brand}</span>
          <h2 className="font-semibold text-2xl">{content.title}</h2>
          <h3 className="text-lg">{content.subtitle}</h3>
          <p className="mt-8 text-justify text-sm">
            {content.description}
          </p>
        </article>
        <div className="mt-12 w-full text-center cursor-pointer bg-accent px-6 py-2 text-white rounded-md">
          Fechar Guia
        </div>
      </div>
    </Popup>
  );
};

export default ProductDetails;
