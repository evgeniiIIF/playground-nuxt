import { useAppFetch } from '@/composables/useAppFetch';

const BASE_PATH = '/services';

const fetchServicesTitleHttp = async (title: string) => {
  const path = `${BASE_PATH}/${title}`;

  const response = await useAppFetch(path, {
    method: 'GET',
  });

  return response;
};

export const servicesTitleHttp = {
  fetchServicesTitleHttp,
};
