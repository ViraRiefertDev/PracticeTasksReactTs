import { v4 } from 'uuid';
import { EmptyTitle, TodoListContainer } from './styles';
import Todo from '../Todo/Todo';
import { TodoListProps } from './types';

function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
  return (
    <TodoListContainer>
      {todos.length === 0 && <EmptyTitle>Todo list is empty</EmptyTitle>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
