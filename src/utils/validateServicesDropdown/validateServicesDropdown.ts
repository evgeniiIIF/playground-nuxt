import type { ServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

const validateServicesDropdown = (value: ServicesAllItemChild[]) => {
  if (value.length < 1) return 'Необходимо выбрать одну или несколько услуг';

  return '';
};

export { validateServicesDropdown };
