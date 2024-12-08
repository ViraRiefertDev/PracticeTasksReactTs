import { useState } from 'react';
import { v4 } from 'uuid';

import TodoForm from 'components/ToDoApp/components/TodoForm/TodoForm';
import { AppContainer, Title, CompletedTodoInfo } from './styles';
import TodoList from 'components/ToDoApp/components/TodoList/TodoList';
import { Todo } from 'components/ToDoApp/components/Todo/types';
import TodosActions from 'components/ToDoApp/components/TodosActions/TodosActions';

function Task03TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [numberOfCompletedTodo, setNumberOfCompletedTodo] = useState<number>(0);

  function addTodoHandler(input: string) {
    const newTodo = {
      text:input,
      isCompleted:false,
      id:v4(),
    }
    setTodos([...todos, newTodo]);
  }

  function deleteTodoHandler(idToRemove: string) {
    setTodos(todos.filter((todo) => {
      if(todo.id === idToRemove && todo.isCompleted===true){
        setNumberOfCompletedTodo((prevValue)=>(prevValue-1));
      }
      return todo.id !== idToRemove}));
  }

  function toggleTodoHandler(idToComplete:string){
    setTodos(todos.map((todo)=>{
      if(idToComplete ===todo.id ){
        if(todo.isCompleted===false){
          setNumberOfCompletedTodo((prevValue)=>(prevValue+1));
        }else{
          setNumberOfCompletedTodo((prevValue)=>(prevValue-1));
        }
        return {...todo, isCompleted: !todo.isCompleted};
      }
        return todo;
    }))
  }

  function deleteCompletedTodosHandler(){
    setTodos(todos.filter((todo)=>(todo.isCompleted===false)));
    setNumberOfCompletedTodo(0);
  }

  function deleteAllTodosHandler(){
    setTodos([]);
    setNumberOfCompletedTodo(0);
  }

  return (
    <AppContainer>
      <Title>Todo App</Title>
      <TodoForm addTodo={addTodoHandler} />
      <TodosActions numberOfCompletedTodos={numberOfCompletedTodo} deleteAllTodos={deleteAllTodosHandler} deleteCompletedTodos={deleteCompletedTodosHandler}/>
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      {numberOfCompletedTodo > 0 && <CompletedTodoInfo>You have completed {numberOfCompletedTodo} todo</CompletedTodoInfo>}
    </AppContainer>
  );
}

export default Task03TodoApp;
