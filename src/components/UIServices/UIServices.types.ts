import type { ServicesAllItem, changedServicesAllItem } from '@/store/servicesAll/servicesAll.types';

export type UIServices = {
  services: ServicesAllItem[];
  onClickButton: () => void;
};

export interface UIServicesEmits {
  (event: 'onRemoveService', service: changedServicesAllItem): void;
}
