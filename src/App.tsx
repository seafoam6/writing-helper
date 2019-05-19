import React, { useState } from 'react';
import {Button} from 'grommet';
import styled from 'styled-components'

export const arrOfNumbers = (count: number): number[] => {
  let i = 0;
  const thing = [];
  while (i < count){
    i++;
    thing.push(i)
  }
  return thing;
}

export const setOfThings = (count: number, thingToDo: string): string[] => {
  return arrOfNumbers(count).map(i => `${thingToDo} ${i}`)
}

export const stuffToDo = [
  "read scenes",
 ...setOfThings(4, 'read outline (leave notes)'), 
 ...setOfThings(4, 'write outline (fix brackets and ???\'s)'),
 ...setOfThings(4, 'write scene'), 
  ...setOfThings(4, 'write [D:] decisions for scenes'), 
  ...setOfThings(4, 'write [C:] consequences from scenes'), 
  ...setOfThings(4, 'write [E:] echos to other acts'), 
  ...setOfThings(4, 'write [V:] visual pass'), 
 "work on character outline"
]

export const getRandomThing = () => {
  return stuffToDo[Math.floor(Math.random() * stuffToDo.length)];
}

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
    const thingToDo =  getRandomThing();

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
