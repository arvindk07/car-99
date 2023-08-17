import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
