export interface TodoProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
}

export interface Todo{
  text:string;
  isCompleted:boolean;
  id:string;
}