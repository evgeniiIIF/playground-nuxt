import type {
  ServicesAllItemChild,
  ServicesAllItemParent,
  changedServicesAllItemChild,
} from '@/store/servicesAll/servicesAll.types';

export type UIAccordion = {
  title: string;
  servicesCategory: ServicesAllItemParent;
  checkedServicesCategory?: ServicesAllItemChild[];
};

export interface UIAccordionEmits {
  (event: 'onChangeService', service: changedServicesAllItemChild): void;
}
