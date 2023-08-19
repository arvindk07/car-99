import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  rightIcon?: string;
  textStyle?: string;
  isDisabled?: boolean;
  containerStyles?: string;
  btnType?: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufactureProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  make: string;
  year: number;
  class: string;
  drive: string;
  model: string;
  city_mpg: number;
  cylinders: number;
  fuel_type: string;
  highway_mpg: number;
  displacement: number;
  transmission: string;
  combination_mpg: number;
}

export interface FilterProps {
  year: number;
  fuel: string;
  limit: number;
  model: string;
  manufacturer: string;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
}

export interface ShowMoreProps {
  isNext: boolean;
  pageNumber: number;
}
