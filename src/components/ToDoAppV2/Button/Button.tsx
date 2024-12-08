import { TodoButton } from './styled';
import { ButtonProps } from './types';

function Button({ type = 'button', buttonName, onClick }: ButtonProps) {
  return (
    <TodoButton type={type} onClick={onClick}>
      {buttonName}
    </TodoButton>
  );
}

export default Button;
