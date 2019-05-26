export const setOfThings = (count: number, thingToDo: string): string[] => {
  return [1, 3, 5, 7].map(i => `${thingToDo} ${i}`);
};

export const stuffToDo = [
  '👀🎬read scenes, leave notes',
  '👀🎬read scenes, rewrite outline to match notes',
  '🎬🗒Split acts into sub acts',
  '👀🗒read outline (leave notes) 1',
  '👀🗒read outline (leave notes) 3',
  '👀🗒read outline (leave notes) 5',
  '👀🗒read outline (leave notes) 7',
  "✏️🗒write outline (fix brackets and ???'s) 1",
  "✏️🗒write outline (fix brackets and ???'s) 3",
  "✏️🗒write outline (fix brackets and ???'s) 5",
  "✏️🗒write outline (fix brackets and ???'s) 7",
  '✏️🎬write scene 1',
  '✏️🎬write scene 3',
  '✏️🎬write scene 5',
  '✏️🎬write scene 7',
  '🍥write [D:] decisions for scenes 1',
  '🍥write [D:] decisions for scenes 3',
  '🍥write [D:] decisions for scenes 5',
  '🍥write [D:] decisions for scenes 7',
  '💵write [C:] consequences from scenes 1',
  '💵write [C:] consequences from scenes 3',
  '💵write [C:] consequences from scenes 5',
  '💵write [C:] consequences from scenes 7',
  '🔊write [E:] echos to other acts 1',
  '🔊write [E:] echos to other acts 3',
  '🔊write [E:] echos to other acts 5',
  '🔊write [E:] echos to other acts 7',
  '🎆write [V:] visual pass 1',
  '🎆write [V:] visual pass 3',
  '🎆write [V:] visual pass 5',
  // "🎆write [V:] visual pass 7",
  '👨‍👩‍👧‍👧work on character outline'
];
