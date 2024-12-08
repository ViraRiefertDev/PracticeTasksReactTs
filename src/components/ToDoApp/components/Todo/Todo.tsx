import {
  TodoItem,
  TodoIcon,
  CheckIcon,
  DeleteIcon,
  IconWrapper,
  TodoText,
} from './styles';
import { TodoProps } from './types';

function Todo({ todo, deleteTodo, toggleTodo }: TodoProps) {
  return (
    <TodoItem
      isCompleted={todo.isCompleted}
    >
      <IconWrapper>
        <TodoIcon isCompleted={todo.isCompleted} />
      </IconWrapper>
      <TodoText>{todo.text}</TodoText>
      <IconWrapper>
        <CheckIcon isCompleted={todo.isCompleted} onClick={()=>{toggleTodo(todo.id)}}/>
      </IconWrapper>
      <IconWrapper>
        <DeleteIcon isCompleted={todo.isCompleted} onClick={() => {
        deleteTodo(todo.id);
      }} />
      </IconWrapper>
    </TodoItem>
  );
}

export default Todo;
