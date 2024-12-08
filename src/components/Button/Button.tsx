import { MainButton } from './styles';
import { ButtonProps } from './types';

function Button({
  type = 'button',
  onClick,
  children,
  isDecrementDisabled,
}: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={isDecrementDisabled}>
      {children}
    </MainButton>
  );
}

export default Button;
