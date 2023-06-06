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
  height: number;
}

export type GlassType = "CYLINDER" | "SQUARE";

export interface SetGlassSizeProps {
  radius: number | undefined;
  setRadius: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export interface SetGlassHeightProps {
  height: {y: number; h: number};
  setHeight: React.Dispatch<React.SetStateAction<{y: number; h: number}>>;
}
