import { atom } from "recoil";
import { IMenu } from "./interfaces";

export const likedMenuAtom = atom<IMenu[]>({
  key: "likedMenuAtom",
  default: [],
});
