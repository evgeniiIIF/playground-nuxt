import type { Cars } from '@/store/cars/cars.types';
import type { servicesAllItemParent } from '@/store/servicesAll/servicesAll.types';

export type RepairCalculation = {
  cars: Cars;
  services: servicesAllItemParent[];
};
