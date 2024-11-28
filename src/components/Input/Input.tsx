import { InputLabel, InputWrapper,InputEl} from './styles';
import { IInputProps } from './types';

function Input({ name, type = 'text', placeholder, label, id }: IInputProps) {
  return (
    <InputWrapper>
      {label && (
        <InputLabel htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <InputEl id={id} type={type} name={name} placeholder={placeholder} />
    </InputWrapper>
  );
}

export default Input;
