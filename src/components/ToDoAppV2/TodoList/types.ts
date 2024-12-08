import { Todo } from "../Todo/types";
export interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
}
