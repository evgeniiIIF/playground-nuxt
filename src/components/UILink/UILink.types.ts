export type UILink = {
  type: 'a' | 'NuxtLink';
  link: string;
  text: string;
  color?: 'black' | 'white' | 'blue';
  fontSizeSmall?: boolean;
  fontGrow?: boolean;
};
