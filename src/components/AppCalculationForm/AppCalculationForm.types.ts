import type { ServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

export type AppCalculationForm = {
  services: ServicesAllItemChild[];
  carBrand: string;
  carModel: string;
};
