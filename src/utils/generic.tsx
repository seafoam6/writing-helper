export const arrOfNumbers = (count: number): number[] => {
  let i = 0;
  const thing = [];
  while (i < count){
    i++;
    thing.push(i)
  }
  return thing;
}


export const getRandomThing = (list: string[]) => {
  return list[Math.floor(Math.random() * list.length)];
}