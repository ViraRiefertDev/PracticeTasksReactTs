export interface IInputProps {
  name: string;
  type?: 'text' | 'password' | 'email' | 'tel';
  placeholder?: string;
  label?: string;
  id?: string;
  value?:string;
  onChange?:()=>void;
}
