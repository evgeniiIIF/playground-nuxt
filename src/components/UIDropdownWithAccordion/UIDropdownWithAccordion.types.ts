import type {
  ServicesAllItemChild,
  ServicesAllItemParent,
  changedServicesAllItemChild,
} from '@/store/servicesAll/servicesAll.types';

export type UIDropdownWithAccordion = {
  title: string;
  items: ServicesAllItemParent[];
  checkedServices?: ServicesAllItemChild[];
  value?: string;
  placeholder?: string;
  errorMessage?: string;
  withoutTitleMargin?: boolean;
};

export interface UIDropdownWithAccordionEmits {
  (event: 'onChangeService', service: changedServicesAllItemChild): void;
}
