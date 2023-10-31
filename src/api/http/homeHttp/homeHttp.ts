import { useAppFetch } from '@/composables/useAppFetch';
import type { homeResponse } from '@/api/http/homeHttp/homeHttp.types';

const BASE_PATH = '/index';

const fetchHome = async () => {
  const response = await useAppFetch<homeResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const homeHttp = {
  fetchHome,
};
