import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

const setChecked = (service: ServicesAllItem, checkedServices?: ServicesAllItem[]) =>
  !!checkedServices?.find((s) => s.id === service.id);

export { setChecked };
