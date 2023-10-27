import { useAppFetch } from '@/composables/useAppFetch';
import type { ServicesAllItemsData } from '@/store/servicesAll/servicesAll.types';

const BASE_PATH = '/services_all';

const fetchServicesAll = async () => {
  const response = await useAppFetch<ServicesAllItemsData>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const servicesAllHttp = {
  fetchServicesAll,
};
