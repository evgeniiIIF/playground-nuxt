import { useAppFetch } from '@/composables/useAppFetch';

const BASE_PATH = '/offers';

const fetchOffers = async (slug?: string) => {
  const path = slug ? `${BASE_PATH}/${slug}` : BASE_PATH;
  console.log(path);

  const response = await useAppFetch(path, {
    method: 'GET',
  });
  console.log(response);
  return response;
};

export const offersHttp = {
  fetchOffers,
};
