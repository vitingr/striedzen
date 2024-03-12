import { NAVBAR_CONSTANT } from "@/constants/navbar";
import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  title: string
  url: string
}

const HomeListNavbar = () => {
  return (
    <div className="hidden lg:flex pt-40">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          {NAVBAR_CONSTANT.map((item: NavbarItemProps, index: number) => (
            <Link
              href={item.url}
              key={`navbar_item_${index}`}
              className="text-slate-600 text-sm uppercase navbar__link relative"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeListNavbar;
