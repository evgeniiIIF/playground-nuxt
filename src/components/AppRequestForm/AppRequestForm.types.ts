import type { ServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

export type AppRequestForm = {
  services: ServicesAllItemChild[];
  carBrand: string;
  carModel: string;
};
