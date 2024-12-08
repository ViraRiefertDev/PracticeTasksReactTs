import { useState } from 'react';
import { v4 } from 'uuid';

import TodoForm from 'components/ToDoAppV2/TodoForm/TodoForm';
import { AppContainer, Title } from './styles';
import TodoList from 'components/ToDoAppV2/TodoList/TodoList';
import { Todo } from 'components/ToDoAppV2/Todo/types';

function Task3_1TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addNewTodoHandler(newTodo: string) {
    const newTodoObject ={
      text:newTodo,
      isCompleted:false,
      id:v4(),
    }
    setTodos([...todos, newTodoObject]);
  }

  function deleteTodoHandler(idToDelete: string) {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  }

  return (
    <AppContainer>
      <Title>Todo App (vesion2)</Title>
      <TodoForm addTodo={addNewTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </AppContainer>
  );
}

export default Task3_1TodoApp;
