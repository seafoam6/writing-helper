import React from 'react';
import { Button, Box } from 'grommet';
import { getTodoById } from '../data/todos/selectors';
import { useSelector } from 'react-redux';

interface IProps {
  match: any;
}

// change data structure to byId
// write selectors

const TodoEdit: React.SFC<IProps> = ({ match }) => {
  const { todo } = useSelector(state => ({
    todo: getTodoById(state, match.params.id)
  }));

  // const { state, dispatch } = React.useContext(Store);
  // console.log(state);
  // console.log(state.ids.filter(i => i.id === 43));
  // const thing = state.ids.filter(i => i.id === 43).length
  // ? state.ids.filter(i => i.id === 43)
  // : [{ id: 33, description: "" }];

  return (
    <div>{todo && <Button label={`${todo.id} ${todo.description}`} />}</div>
  );
};

export default TodoEdit;
