import { v4 } from 'uuid';
import { EmptyTitle, TodoListContainer } from './styles';
import Todo from '../Todo/Todo';
import { TodoListProps } from './types';

function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
  const createTodoList = todos.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  ));

  return (
    <TodoListContainer>
      {todos.length === 0 && <EmptyTitle>Todo list is empty</EmptyTitle>}
      {createTodoList}
    </TodoListContainer>
  );
}

export default TodoList;
