import { IconWrapper, TodoItem, TodoIcon, TodoText } from './styled';
import { TodoProps } from './types';
import todoIcon from '../../../assets/todoIcon.svg';

function Todo({ todo,deleteTodo }: TodoProps) {
  return (
    <TodoItem
      onDoubleClick={() => {
        deleteTodo(todo.id);
      }}
    >
      <IconWrapper>
        <TodoIcon src={todoIcon} />
      </IconWrapper>
      <TodoText>{todo.text}</TodoText>
    </TodoItem>
  );
}

export default Todo;
