import type { changedServicesAllItemChild, ServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

export type UIServiceTypes = {
  service: ServicesAllItemChild;
  checked?: boolean;
  withCheckbox?: boolean;
  withCrossButton?: boolean;
  priceIsHiddenOnMobile?: boolean;
  withSmallPadding?: boolean;
};

export interface UIServiceEmits {
  (event: 'onChange', service: changedServicesAllItemChild): void;
  (event: 'onRemove', service: changedServicesAllItemChild): void;
}
