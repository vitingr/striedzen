import { footerLinks } from "@/constants/footer";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute w-full">
      <div className="border-zinc-100 border-t-2 min-h-[360px] flex w-full pt-16 flex-col sm:flex-row">
        <div className="w-full xs:mb-12 flex flex-col items-center xs:justify-center">
          <h1 className="font-extrabold text-3xl w-full flex justify-center text-white">
          Striedezënn
          </h1>
          <p className="text-slate-700 mt-2">Projeto IFSP</p>
          <p className="text-slate-700">Gestão e Empreendedorismo</p>
        </div>
        <div className="w-full flex gap-6 flex-wrap sm:flex-nowrap mt-16 sm:mt-0">
          {footerLinks.map((link: any, index: number) => (
            <div
              key={index}
              className="w-full flex flex-col gap-6 text-base min-w-[170px] justify-center items-center sm:justify-normal sm:items-start"
            >
              <h3 className="font-bold text-slate-700 text-xl">{link.title}</h3>
              {link.links.map((link: any, index: number) => (
                <Link key={index} href={link.url} className="text-slate-700 ">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;