import { ButtonProps } from './types';
import { MainButton } from './styles';

function Button({name,type = 'button', onClick, disabled = false}:ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={disabled}>{name}</MainButton>
  );
}

export default Button;
