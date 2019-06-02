export interface ITodo {
  id: number;
  description: string;
  created_on: string;
  active: boolean;
}

export interface IState {
  todos: ITodo[];
  currentText: string;
}

export interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string }) => void;
}
