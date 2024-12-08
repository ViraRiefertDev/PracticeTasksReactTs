import { ReactNode } from "react";

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children:ReactNode;
}
