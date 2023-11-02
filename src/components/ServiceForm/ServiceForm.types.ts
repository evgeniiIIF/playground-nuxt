import type { ServicesAllItemChild, ServicesAllItemParent } from '@/store/servicesAll/servicesAll.types';

export type ServiceForm = {
  services: ServicesAllItemParent[];
  chooseServices: ServicesAllItemChild[];
};
