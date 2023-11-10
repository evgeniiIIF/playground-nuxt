import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

export type AutoServicesSubcategoryTypes = {
  title: string;
  slug: string;
  items?: ServicesAllItem[];
};
