export type Wish = {
  id: string;
  text: string;
  sphere: Sphere | null;
};

export type Sphere = {
  name: string;
  color: string;
};
