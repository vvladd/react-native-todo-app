export interface TodoItemProps {
  id: string;
  title: string;
}
export interface TodoProps {
  todo: TodoItemProps;
  onRemove: (id: string) => void;
  onOpen: (id: string) => void;
}
