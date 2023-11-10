import type { ServicesAllItem, changedServicesAllItem } from '@/store/servicesAll/servicesAll.types';

export type UIAccordion = {
  title: string;
  servicesCategory: ServicesAllItem;
  checkedServicesCategory?: ServicesAllItem[];
};

export interface UIAccordionEmits {
  (event: 'onChangeService', service: changedServicesAllItem): void;
}
