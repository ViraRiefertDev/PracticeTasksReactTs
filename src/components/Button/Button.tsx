import { ButtonProps } from './types';
import { MainButton } from './styles';

function Button({name,type = 'button', onClick, disabled }:ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} className='main-button' disabled={disabled}>{name}</MainButton>
  );
}

export default Button;
