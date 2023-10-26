import { useAppFetch } from '@/composables/useAppFetch';

const BASE_PATH = '/categories';

const fetchCategories = async (id?: number) => {
  const path = id ? `${BASE_PATH}/${id}` : BASE_PATH;

  const response = await useAppFetch(path, {
    method: 'GET',
  });
  return response;
};

export const categoriesHttp = {
  fetchCategories,
};
