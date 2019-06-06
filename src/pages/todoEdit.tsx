import React from 'react';
import { Button, Box } from 'grommet';

interface IProps {
  match: any;
}

// change data structure to byId
// write selectors

const TodoEdit: React.SFC<IProps> = ({ match }) => {
  // const { state, dispatch } = React.useContext(Store);
  // console.log(state);
  // console.log(state.ids.filter(i => i.id === 43));
  // const thing = state.ids.filter(i => i.id === 43).length
  // ? state.ids.filter(i => i.id === 43)
  // : [{ id: 33, description: "" }];
  return (
    <div>
      {/* <Button label={`${thing[0].id} ${thing[0].description}`} /> */}
    </div>
  );
};

export default TodoEdit;
