import type { changedServicesAllItem, ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

export type UIServiceTypes = {
  service: ServicesAllItem;
  checked?: boolean;
  withCheckbox?: boolean;
  withCrossButton?: boolean;
  priceIsHiddenOnMobile?: boolean;
  withSmallPadding?: boolean;
};

export interface UIServiceEmits {
  (event: 'onChange', service: changedServicesAllItem): void;
  (event: 'onRemove', service: changedServicesAllItem): void;
}
