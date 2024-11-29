import { InputLabel, InputContainer,InputEl} from './styles';
import { IInputProps } from './types';

function Input({ name, type = 'text', placeholder, label, id }: IInputProps) {
  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <InputEl id={id} type={type} name={name} placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;
