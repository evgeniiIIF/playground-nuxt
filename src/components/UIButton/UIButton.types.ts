export type UIButtonTypes = {
  text: string;
  type?: 'button' | 'submit';
  isFilled?: boolean;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  hasFullWidth?: boolean;
  sizeLarge?: boolean;
};
