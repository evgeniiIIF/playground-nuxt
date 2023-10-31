import type { ServicesAllItemParent } from '@/store/servicesAll/servicesAll.types';

export type UIDropdownWithAccordion = {
  title: string;
  items: ServicesAllItemParent[];
  value?: string;
  placeholder?: string;
};
