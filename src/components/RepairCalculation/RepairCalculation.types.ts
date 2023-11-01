import type { Cars } from '@/store/cars/cars.types';
import type { ServicesAllItemParent } from '@/store/servicesAll/servicesAll.types';

export type RepairCalculation = {
  cars: Cars;
  services: ServicesAllItemParent[];
};
