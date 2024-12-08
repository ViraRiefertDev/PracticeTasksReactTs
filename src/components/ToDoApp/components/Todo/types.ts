export interface TodoProps {
  todo: Todo;
  key: string;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export interface Todo {
  text: string;
  isCompleted: boolean;
  id: string;
}
