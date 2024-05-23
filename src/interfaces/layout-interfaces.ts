export interface ISection {
  text: string;
  url: string;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDrawer {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}
