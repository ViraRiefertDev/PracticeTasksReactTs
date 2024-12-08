import { MainInput } from './styles';
import { MainInputProps } from './types';

function Input({ inputValue, onChange, placeholder }: MainInputProps) {
  return (
    <MainInput
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
    />
  );
}

export default Input;
