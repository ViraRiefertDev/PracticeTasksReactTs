export interface ButtonProps {
  buttonName: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
}
