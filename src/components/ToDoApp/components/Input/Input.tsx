import { MainInput } from './styles';
import { InputProps } from './types';

function Input({ placeholder, inputValue, onChange }: InputProps) {
  return (
    <MainInput
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
    />
  );
}

export default Input;
