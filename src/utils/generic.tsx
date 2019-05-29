export const arrOfNumbers = (count: number): number[] => {
  let i = 0;
  const thing = [];
  while (i < count) {
    i++;
    thing.push(i);
  }
  return thing;
};

export const getRandomThing = (list: { text: string; active: boolean }[]) => {
  const active = list.filter(i => i.active);
  return active[Math.floor(Math.random() * list.length)];
};
