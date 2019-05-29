export const setOfThings = (count: number, thingToDo: string): string[] => {
  return [1, 3, 5, 7].map(i => `${thingToDo} ${i}`);
};

export const stuffToDo: { text: string; active: boolean }[] = [
  { text: '👀🎬read scenes, leave notes', active: true },
  { text: '👀🎬read scenes, rewrite outline to match notes', active: true },
  { text: '🎬🗒Split acts into sub acts', active: true },
  { text: '👀🗒read outline (leave notes) 1', active: true },
  { text: '👀🗒read outline (leave notes) 3', active: true },
  { text: '👀🗒read outline (leave notes) 5', active: true },
  { text: '👀🗒read outline (leave notes) 7', active: true },
  { text: "✏️🗒write outline (fix brackets and ???'s) 1", active: true },
  { text: "✏️🗒write outline (fix brackets and ???'s) 3", active: true },
  { text: "✏️🗒write outline (fix brackets and ???'s) 5", active: true },
  { text: "✏️🗒write outline (fix brackets and ???'s) 7", active: true },
  { text: '✏️🎬write scene 1', active: true },
  { text: '✏️🎬write scene 3', active: true },
  { text: '✏️🎬write scene 5', active: true },
  { text: '✏️🎬write scene 7', active: true },
  { text: '🍥write [D:] decisions for scenes 1', active: true },
  { text: '🍥write [D:] decisions for scenes 3', active: true },
  { text: '🍥write [D:] decisions for scenes 5', active: true },
  { text: '🍥write [D:] decisions for scenes 7', active: true },
  { text: '💵write [C:] consequences from scenes 1', active: true },
  { text: '💵write [C:] consequences from scenes 3', active: true },
  { text: '💵write [C:] consequences from scenes 5', active: true },
  { text: '💵write [C:] consequences from scenes 7', active: true },
  { text: '🔊write [E:] echos to other acts 1', active: false },
  { text: '🔊write [E:] echos to other acts 3', active: true },
  { text: '🔊write [E:] echos to other acts 5', active: true },
  { text: '🔊write [E:] echos to other acts 7', active: true },
  { text: '🎆write [V:] visual pass 1', active: false },
  { text: '🎆write [V:] visual pass 3', active: true },
  { text: '🎆write [V:] visual pass 5', active: true },
  { text: '🎆write [V:] visual pass 7', active: false },
  { text: '👨‍👩‍👧‍👧work on character outline', active: true }
];
