import { ITodo, ITodosState } from '../utils/interfaces';

export const arrOfNumbers = (count: number): number[] => {
  let i = 0;
  const thing: number[] = [];
  while (i < count) {
    i++;
    thing.push(i);
  }
  return thing;
};

export const getRandomTodo = (list: ITodo[]) => {
  const active = list.filter(i => i.active);
  return active[Math.floor(Math.random() * list.length)];
};

export const getResultFromAPICall = response => {
  return response.data.rows[0];
};

export const breakUpTodo = (acc, cur) => {
  acc.ids.push(cur.id);
  acc.byId[cur.id] = cur;
  if (cur.active) {
    acc.active.push(cur.id);
  } else {
    acc.inactive.push(cur.id);
  }
  return acc;
};

export const normalizeTodos = (todos: ITodo[]) => {
  console.log('norm', todos);
  return todos.reduce(breakUpTodo, {
    ids: [] as number[],
    byId: {},
    active: [] as number[],
    inactive: [] as number[]
  });
};
