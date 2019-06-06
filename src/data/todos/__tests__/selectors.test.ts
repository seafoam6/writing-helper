import { ITodosState } from '../../../utils/interfaces';
import * as selectors from '../selectors';

const state: ITodosState = {
  todos: {
    ids: [18, 19, 20] as number[],
    byId: {
      '18': {
        id: 18,
        description: '👀🎬read scenes, leave notes',
        created_on: '2019-06-02T18:06:42.051Z',
        active: true
      },
      '19': {
        id: 19,
        description: '👀🎬read scenes, rewrite outline to match notes',
        created_on: '2019-06-02T18:06:42.111Z',
        active: true
      },
      '20': {
        id: 20,
        description: '🎬🗒Split acts into sub acts',
        created_on: '2019-06-02T18:06:42.128Z',
        active: false
      }
    },
    active: [18, 19] as number[],
    inactive: [20] as number[]
  }
};

describe('getTodos', () => {
  it('returns todos piece of state', () => {
    expect(selectors.getTodos(state)).toEqual(state.todos);
  });
});

describe('getTodoIds', () => {
  it('returns ids', () => {
    expect(selectors.getTodoIds(state)).toEqual([18, 19, 20]);
  });
});

describe('getAllTodos', () => {
  it('returns all todos', () => {
    expect(selectors.getAllTodos(state)).toMatchSnapshot();
  });
});

describe('getTodoById', () => {
  it('returns all todos', () => {
    expect(selectors.getTodoById(state, 18)).toMatchSnapshot();
  });
});
