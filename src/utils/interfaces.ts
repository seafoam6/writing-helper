export interface ITodo {
  id: number;
  description: string;
  created_on: string;
  active: boolean;
}
export interface ITodosState {
  todos: {
    ids: number[];
    byId: {
      [Key: number]: ITodo;
    };
    active: number[];
    inactive: number[];
  };
}

export interface DatabaseResponseRow {
  description: string;
  created_on: string;
  id: number;
  active: boolean;
}

//Todo: change this to a better name
export interface CreateTodoResponse {
  data: {
    rows: DatabaseResponseRow[];
  };
}

export interface IContextProps {
  state: ITodosState;
  dispatch: ({ type }: { type: string }) => void;
}
