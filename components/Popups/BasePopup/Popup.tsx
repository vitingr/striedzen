import { PopupProps } from "@/types/types";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({
  children,
  title,
  description,
  showState,
  handleSubmit,
}: PopupProps) => {
  return (
    <div className="popup-wrapper z-[999] sm:mt-0 sm-[75px]">
      <div className="glassmorphism">
        <div className="max-w-[800px] w-full p-10 bg-white rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="w-full text-3xl font-bold">{title}</h1>
            {handleSubmit ? (
              <IoCloseOutline
                size={25}
                className="cursor-pointer"
                onClick={() => {
                  showState(false);
                  handleSubmit();
                }}
              />
            ) : (
              <IoCloseOutline
                size={25}
                className="cursor-pointer"
                onClick={async () => {
                  await showState(false);
                }}
              />
            )}
          </div>
          {description && (
            <p className="text-[#717171] mt-2 mb-6">{description}</p>
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
