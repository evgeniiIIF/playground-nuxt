import type { ServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

export type UIServiceTypes = {
  service: ServicesAllItemChild;
  withCheckbox?: boolean;
  withCrossButton?: boolean;
  priceIsHiddenOnMobile?: boolean;
};

export interface UIServiceEmits {
  (event: 'onChange', $event: Event, item: ServicesAllItemChild): void;
  (event: 'onRemove', item: ServicesAllItemChild): void;
}
