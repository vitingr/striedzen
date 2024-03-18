"use client"

import React, { useState } from "react";
import Popup from "../BasePopup/Popup";
import { ProductProps } from "@/types/types";
import ToastMessage from "@/components/ToastMessage";
import { toast } from "react-toastify";
import { formatCurrency } from "@/utils/functions/formatCurrency";

interface CreatePopupProps {
  handleFunction: any
  showState: any;
  setShowState: any
}

const CreatePopup = ({ showState, setShowState, handleFunction }: CreatePopupProps) => {
  const [productData, setProductData] = useState<ProductProps>({
    image: "",
    title: "",
    subtitle: "",
    description: "",
    price: 0,
    brand: ""
  })

  const createProduct = async () => {
    try {
      const response = await fetch("/api/products/createProduct", {
        method: "POST",
        body: JSON.stringify({
          title: productData.title,
          description: productData.description,
          brand: productData.brand,
          price: productData.price,
          image: "https://2.bp.blogspot.com/-XRxzzskvstk/URD8nlt53PI/AAAAAAAAAgI/eB_eXC2fLW8/s1600/chinelo_3.png",
          units: 10,
          slug: "Slug de teste"
        })
      })
      handleFunction()
      toast.success("O produto foi adicionado com sucesso!")
    } catch (error) {
      toast.error("Não foi possível adicionar esse produto")
      throw new Error("Não foi possível adicionar esse produto")
    } finally {
      showState(false)
    }
  }

  return (
    <Popup
      title="Adicionar Produto"
      description="Edite os produtos para atrair novos clientes e valorizar o produto"
      showState={showState}
      setShowState={setShowState}
    >
      <ToastMessage />
      <form
        onSubmit={async (e: React.SyntheticEvent) => {
          e.preventDefault();
          await createProduct()
        }}
        className="w-full flex flex-col gap-y-8 mt-12"
      >
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="">
            Nome do Produto
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o nome do produto"
            autoComplete="off"
            spellCheck={false}
            minLength={4}
            maxLength={60}
            onChange={(e) => setProductData((prevProductData) => ({ ...prevProductData, title: e.target.value }))}
            className="outline-none py-2 border-b border-slate-300 transition-all duration-300 ease rounded-sm text-sm text-slate-600 focus:border-slate-600"
            required
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="description" className="">
            Descrição
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Digite o nome do produto"
            autoComplete="off"
            spellCheck={false}
            minLength={4}
            maxLength={60}
            onChange={(e) => setProductData((prevProductData) => ({ ...prevProductData, description: e.target.value }))}
            className="outline-none py-2 border-b border-slate-300 transition-all duration-300 ease rounded-sm text-sm text-slate-600 focus:border-slate-600"
            required
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="price" className="">
            Preço
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Informe o preço do produto"
            autoComplete="off"
            spellCheck={false}
            minLength={4}
            maxLength={60}
            onChange={(e) => setProductData((prevProductData) => ({ ...prevProductData, price: Number(e.target.value) }))}
            className="outline-none py-2 border-b border-slate-300 transition-all duration-300 ease rounded-sm text-sm text-slate-600 focus:border-slate-600"
            required
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="brand" className="">
            Nome do Produto
          </label>
          <select
            name="brand"
            id="brand"
            onChange={(e) => setProductData((prevProductData) => ({ ...prevProductData, brand: e.target.value }))}
            className="outline-none py-2 border-b border-slate-300 transition-all duration-300 ease rounded-sm text-sm text-slate-600 focus:border-slate-600"
            required
          >
            <option value=""></option>
            <option value="Básica">Básica</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Verão">Verão</option>
          </select>
        </div>

        <button className="rounded-lg bg-accent text-white px-4 py-2 text-center cursor-pointer">Adicionar Produto</button>
      </form>
    </Popup>
  );
};

export default CreatePopup;
