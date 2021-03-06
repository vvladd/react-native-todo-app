import {TodoItemProps} from '../../components/Todo/interfaces';

export interface TodoScreenProps {
  todo: TodoItemProps;
  onGoBack: () => void;
  onRemove: (id: string) => void;
  onSave: (id: string, title: string) => void;
}
