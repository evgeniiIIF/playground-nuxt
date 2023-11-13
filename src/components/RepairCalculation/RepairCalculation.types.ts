import type { Cars } from '@/store/cars/cars.types';
import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

export type RepairCalculation = {
  cars: Cars;
  services: ServicesAllItem[];
  chooseServices: ServicesAllItem[];
};
