"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { ADMIN_CARDS } from "@/constants/admin";

const page = () => {
  const [showCreateProductForm, setShowCreateProductForm] =
    useState<boolean>(false);

  return (
    <>
      <Navbar />
      <main className="min-h-[62vh] w-full lg:py-20 py-32 flex flex-col items-center">
        <section className="w-full container gap-12 flex lg:flex-nowrap flex-wrap justify-between lg:py-24 py-12 ">
          <ul className="w-full max-w-xs bg-zinc-100 rounded-md px-6 py-8">
            <h2 className="font-semibold text-xl text-slate-700">
              Menu do Admin
            </h2>
            <p className="text-xs text-slate-600 mb-8">
              Aqui é possível controlar todo nosso sistema
            </p>
            <li className="text-slate-500 text-sm border-b py-2 my-2 border-zinc-200 flex gap-x-4 cursor-pointer items-center">
              <TbDeviceDesktopAnalytics
                size={18}
                className="gray-icon cursor-pointer"
              />
              Analytics
            </li>
            <li className="text-slate-500 text-sm border-b py-2 my-2 border-zinc-200 flex gap-x-4 cursor-pointer items-center">
              <IoMdAdd size={18} className="gray-icon cursor-pointer" />
              Adicionar Produto
            </li>
            <li className="text-slate-500 text-sm border-b py-2 my-2 border-zinc-200 flex gap-x-4 cursor-pointer items-center">
              <IoCreateOutline size={18} className="gray-icon cursor-pointer" />
              Editar Produto
            </li>
            <li className="text-slate-500 text-sm border-b py-2 my-2 border-zinc-200 flex gap-x-4 cursor-pointer items-center">
              <MdDelete size={18} className="gray-icon cursor-pointer" />
              Remover Produto
            </li>
            <div className="p-4 bg-zinc-200 rounded-lg mt-8">
              <p className="text-xs text-slate-500 text-center">
                Adicione um menu de configuração personalizado
              </p>
              <div className="flex justify-center gap-x-2 items-center text-white bg-zinc-500 rounded-full px-4 py-2 text-xs mt-4 cursor-pointer">
                <IoMdAdd size={12} className="white-icon cursor-pointer" />
                Adicionar Menu
              </div>
            </div>
          </ul>
          <div className="w-full flex flex-col">
            <div className="w-full flex gap-x-4">
              {ADMIN_CARDS.map((card, index: number) => (
                <div className="bg-slate-700 text-xs rounded-full px-6 py-1 text-white cursor-pointer" key={`admin_card_${index}`}>teste</div>
              ))}
            </div>
            <ul className="mt-8 w-full flex flex-col rounded-lg bg-zinc-50">
              <li className="w-full text-sm px-6 py-2 border-b border-zinc-100">item</li>
              <li className="w-full text-sm px-6 py-2 border-b border-zinc-100">item</li>
              <li className="w-full text-sm px-6 py-2 border-b border-zinc-100">item</li>
              <li className="w-full text-sm px-6 py-2 border-b border-zinc-100">item</li>
              <li className="w-full text-sm px-6 py-2 border-b border-zinc-100">item</li>
            </ul>
          </div>
        </section>
      </main>  
      <Footer />
    </>
  );
};

export default page;
