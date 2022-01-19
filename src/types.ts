export type Wish = {
  id: number;
  text: string;
  sphere: Sphere | null;
};

export type Sphere = {
  id: number;
  name: string;
  color: string;
};
