import type { ServicesAllItemChild, changedServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

export type UIServices = {
  services: ServicesAllItemChild[];
};

export interface UIServicesEmits {
  (event: 'onRemoveService', service: changedServicesAllItemChild): void;
}
