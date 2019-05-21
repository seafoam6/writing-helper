import {arrOfNumbers} from "../utils/generic";

export const setOfThings = (count: number, thingToDo: string): string[] => {
  return arrOfNumbers(count).map((i) => `${thingToDo} ${i}`);
};

export const stuffToDo = [
  "read scenes",
 ...setOfThings(4, "read outline (leave notes)"),
 ...setOfThings(4, "write outline (fix brackets and ???'s)"),
 ...setOfThings(4, "write scene"),
  ...setOfThings(4, "write [D:] decisions for scenes"),
  ...setOfThings(4, "write [C:] consequences from scenes"),
  ...setOfThings(4, "write [E:] echos to other acts"),
  ...setOfThings(4, "write [V:] visual pass"),
 "work on character outline",
];
