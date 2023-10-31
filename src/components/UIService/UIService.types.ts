export type UIServiceTypes = {
  name: string;
  price: number;
  withCrossButton?: boolean;
  checked?: boolean;
  priceIsHiddenOnMobile?: boolean;
};

export interface UIServiceEmits {
  (event: 'onChecked', $event: Event, name: string): void;
  (event: 'onRemove', name: string): void;
}
