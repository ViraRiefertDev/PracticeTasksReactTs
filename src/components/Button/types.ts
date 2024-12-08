import { ReactNode } from "react";

export interface ButtonProps{
  type?:'submit'|'button'|'reset';
  onClick?: ()=>void;
  children:ReactNode;
  isDecrementDisabled?:boolean;

}