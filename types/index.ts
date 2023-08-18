import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufactureProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
