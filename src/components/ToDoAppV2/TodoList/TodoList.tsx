import { v4 } from 'uuid';
import Todo from '../Todo/Todo';
import { TodoListContainer, EmptyTitle } from './styles';
import { TodoListProps } from './types';

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <TodoListContainer>
      {todos.length === 0 && <EmptyTitle>Todo list is empty</EmptyTitle>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
