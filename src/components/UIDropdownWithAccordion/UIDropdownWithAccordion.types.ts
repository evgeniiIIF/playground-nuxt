import type {
  ServicesAllItem,
  changedServicesAllItem,
} from '@/store/servicesAll/servicesAll.types';

export type UIDropdownWithAccordion = {
  title: string;
  items: ServicesAllItem[];
  checkedServices?: ServicesAllItem[];
  value?: string;
  placeholder?: string;
  errorMessage?: string;
  withoutTitleMargin?: boolean;
};

export interface UIDropdownWithAccordionEmits {
  (event: 'onChangeService', service: changedServicesAllItem): void;
}
