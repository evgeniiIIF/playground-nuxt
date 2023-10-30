import { useAppFetch } from '@/composables/useAppFetch';
import type { offersHttpResponse } from './offersHttp.types';

const BASE_PATH = '/offers';

const fetchOffers = async (slug?: string) => {
  const path = slug ? `${BASE_PATH}/${slug}` : BASE_PATH;
  console.log(path);

  const response = await useAppFetch<offersHttpResponse>(path, {
    method: 'GET',
  });
  console.log(response);
  return response;
};

export const offersHttp = {
  fetchOffers,
};
