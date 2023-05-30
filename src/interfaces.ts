export interface IMenu {
  id: number;
  name: string;
  shortDesc: string;
  longDesc: string;
  image: string;
}

export interface IGlass {
  id: number;
  name: string;
  type: GlassType;
  size: number;
}

export type GlassType = "Cylinder" | "Square";
