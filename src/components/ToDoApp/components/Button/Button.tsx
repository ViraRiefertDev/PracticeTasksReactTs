import { ButtonProps } from './types';
import { TodoButton, ChildrenWrapper } from './styled';

function Button({ type = 'button', onClick, children }: ButtonProps) {
  return (
    <TodoButton type={type} onClick={onClick}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </TodoButton>
  );
}

export default Button;
