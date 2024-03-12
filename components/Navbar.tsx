import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="z-40 w-full fixed bg-[#fafafa]">
      <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-1">
              <div className="header_top__icons_wraper">
                <BsFacebook />
              </div>
              <div className="header_top__icons_wraper">
                <BsTwitter />
              </div>
              <div className="header_top__icons_wraper">
                <BsInstagram />
              </div>
              <div className="header_top__icons_wraper">
                <BsLinkedin />
              </div>
            </div>

            <div className="text-slate-500 text-[12px]">
              <b>FRETE GRATUITO</b> SOMENTE COM PEDIDOS ACIMA DE - $55
            </div>

            <div className="flex gap-4">
              <select
                className="text-slate-500 bg-transparent cursor-pointer text-[12px] w-[70px]"
                id="currency"
                name="currency"
              >
                <option value="BRL R$">BRL R$</option>
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
              </select>

              <select
                className="text-slate-500 bg-transparent cursor-pointer text-[12px] w-[90px]"
                id="language"
                name="language"
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-200 py-6">
        <div className="container gap-x-12 sm:flex justify-between items-center">
          <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
            Striedezënn
          </div>
          <div className="w-full sm:max-w-[300px] md:max-w-[70%] relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="O que você está procurando?"
              autoComplete="off"
              minLength={1}
              maxLength={80}
              className="border-gray-200 border px-4 py-2 rounded-sm w-full outline-none text-sm transition duration-200 focus:border-b focus:border-gray-400"
            />
            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 gray-icon cursor-pointer"
              size={20}
            />
          </div>

          <div className="hidden lg:flex gap-4 text-slate-500 text-3xl items-center">
            {/* <BiUser size={24} className="gray-icon cursor-pointer" /> */}
            <UserButton afterSignOutUrl="/" />
            <div className="relative">
              <FiHeart size={24} className="gray-icon cursor-pointer" />
              <div className="cursor-pointer bg-accent rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white grid place-items-center translate-x-1 translate-y-1">
                0
              </div>
            </div>
            <div className="relative">
              <HiOutlineShoppingBag
                size={25}
                className="gray-icon cursor-pointer"
              />
              <div className="cursor-pointer bg-accent rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white grid place-items-center translate-x-1 translate-y-1">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
