import { useAppFetch } from '@/composables/useAppFetch';
import type { carsResponse } from '@/api/http/carsHttp/carsHttp.types';

const BASE_PATH = '/cars';

const fetchCars = async () => {
  const response = await useAppFetch<carsResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const carsHttp = {
  fetchCars,
};
