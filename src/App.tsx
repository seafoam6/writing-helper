import React, { useState } from 'react';
import {Button} from 'grommet';
import styled from 'styled-components'
import {
stuffToDo, 
} from './data/stuffToDo'
import {getRandomThing} from './utils/generic';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height:100vh;
`

const App: React.FC = () => {
  const defaultText = 'PUSH ME'
   const [buttonText, setButtonText] = useState(defaultText);

  const handleClick = () => {
    const thingToDo =  getRandomThing(stuffToDo);

    setButtonText(thingToDo);
  }

  return (
    <Wrapper>
      <Button onClick={handleClick} label={buttonText} />
      <Button onClick={()=> setButtonText(defaultText)} label='Reset' />
    </Wrapper>
  );
}

export default App;
