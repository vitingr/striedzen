import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Popups/Offer/Offer";
import SeeMore from "@/components/SeeMore";
import { PRODUCTS_DATA } from "@/constants/products-data";
import { ProductProps } from "@/types/types";
import { getProductsData } from "@/utils/getProducts";
import Link from "next/link";
import React from "react";

const page = () => {
  const productData = PRODUCTS_DATA;

  return (
    <>
      <Navbar />
      <Offer />
      <main className="min-h-[62vh] lg:pt-12 pt-6 w-full flex flex-col items-center">
      <section
        className="relative w-full max-w-7xl flex flex-col justify-center lg:rounded-md min-h-[400px] lg:py-20 py-12 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://mercadoeconsumo.com.br/wp-content/uploads/2022/12/Puma-3.jpg)`,
        }}
      >
        <article className="w-full p-12 z-20">
          <h2 className="text-white lg:text-4xl text-2xl font-bold drop-shadow-md">
            Linha de Fevereiro
          </h2>
          <p className="text-white lg:text-lg text-base mb-8 drop-shadow-md">
            Que tal uma praia nesse calor?
          </p>
          <Link
            href="#"
            className="bg-blackish text-white lg:rounded-sm py-2 px-4 w-[150px] text-sm text-center"
          >
            Ver Coleção
          </Link>
        </article>
        <div className="rounded-md absolute w-full h-full bg-gradient-to-b from-slate-800 to-transparent"></div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
