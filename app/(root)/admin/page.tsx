"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import RemovePopup from "@/components/Popups/RemoveProduct/RemovePopup";
import CreatePopup from "@/components/Popups/CreateProduct/CreatePopup";
import EditPopup from "@/components/Popups/EditProduct/EditPopup";
import { getProductsData } from "@/utils/getProducts";
import { ProductProps } from "@/types/types";
import AdminProductCard from "@/components/Cards/AdminProductCard/AdminProductCard";

const page = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const [showCreateProductForm, setShowCreateProductForm] =
    useState<boolean>(false);

  const [showEditProductForm, setShowEditProductForm] =
    useState<boolean>(false);

  const [showRemoveProductForm, setShowRemoveProductForm] =
    useState<boolean>(false);

  const fetchProductsData = async () => {
    const response = await getProductsData();
    if (response) {
      setProducts(response);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return products.length > 0 ? (
    <>
      <Navbar />
      <main className="min-h-[62vh] w-full lg:py-20 py-32 flex flex-col items-center">
        <section className="w-full px-4 lg:px-12 gap-12 flex lg:flex-nowrap flex-wrap justify-between lg:py-24 py-12 ">
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
              <div
                className="bg-slate-700 text-xs rounded-full px-6 py-1 text-white cursor-pointer"
                onClick={() => setShowCreateProductForm(!showCreateProductForm)}
              >
                Adicionar Produto
              </div>
              {showCreateProductForm ? (
                <CreatePopup
                  setShowState={setShowCreateProductForm}
                  showState={showCreateProductForm}
                  handleFunction={fetchProductsData}
                />
              ) : null}
              <div
                className="bg-slate-700 text-xs rounded-full px-6 py-1 text-white cursor-pointer"
                onClick={() => setShowEditProductForm(!showEditProductForm)}
              >
                Editar Produto
              </div>
              {showEditProductForm ? (
                <EditPopup
                  setShowState={setShowEditProductForm}
                  showState={showEditProductForm}
                />
              ) : null}
              <div
                className="bg-slate-700 text-xs rounded-full px-6 py-1 text-white cursor-pointer"
                onClick={() => setShowRemoveProductForm(!showRemoveProductForm)}
              >
                Remover Produto
              </div>
              {showRemoveProductForm ? (
                <RemovePopup
                  setShowState={setShowRemoveProductForm}
                  showState={showRemoveProductForm}
                />
              ) : null}
            </div>
            <div className="mt-8 w-full flex flex-col rounded-lg">
              {products?.map((item: ProductProps, index: number) => (
                <AdminProductCard item={item} key={`product_card_${index}`} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  ) : null;
};

export default page;
