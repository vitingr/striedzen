import React from "react";
import Popup from "../BasePopup/Popup";

const CreatePopup = ({ showState }: { showState: any }) => {
  return (
    <Popup
      title="Adicionar Produto"
      description="Edite os produtos para atrair novos clientes e valorizar o produto"
      showState={showState}
    >
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
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
            className="outline-none py-2 border-b border-slate-300 transition-all duration-300 ease rounded-sm text-sm text-slate-600 focus:border-slate-600"
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
            className="outline-none py-2 border-b border-slate-300 transition-all duration-300 ease rounded-sm text-sm text-slate-600 focus:border-slate-600"
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
            placeholder="Digite o nome do produto"
            autoComplete="off"
            spellCheck={false}
            minLength={4}
            maxLength={60}
            className="outline-none py-2 border-b border-slate-300 transition-all duration-300 ease rounded-sm text-sm text-slate-600 focus:border-slate-600"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="brand" className="">
            Nome do Produto
          </label>
          <select
            name="brand"
            id="brand"
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
