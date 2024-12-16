import { v4 } from 'uuid';
import Todo from '../Todo/Todo';
import { TodoListContainer, EmptyTitle } from './styles';
import { TodoListProps } from './types';

function TodoList({ todos, deleteTodo }: TodoListProps) {
  const createTodoList = todos.map((todo) => (
    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
  ));
  return (
    <TodoListContainer>
      {createTodoList}
      {}
    </TodoListContainer>
  );
}

export default TodoList;
