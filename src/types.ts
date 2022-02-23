export type Wish = {
  id: string;
  text: string;
  sphere: Sphere | null;
};

export type Sphere = {
  id: string;
  name: string;
  color: string;
};
