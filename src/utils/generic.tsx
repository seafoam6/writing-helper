import { ITodo } from '../utils/interfaces';

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
