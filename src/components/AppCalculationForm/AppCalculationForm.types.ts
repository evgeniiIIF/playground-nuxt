import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

export type AppCalculationForm = {
  services: ServicesAllItem[];
  carBrand: string;
  carModel: string;
};
