"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  textStyle,
  rightIcon,
  handleClick,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={false}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            fill
            src={rightIcon}
            alt="right icon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
