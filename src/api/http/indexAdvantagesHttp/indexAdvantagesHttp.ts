import { useAppFetch } from '@/composables/useAppFetch';

import type { indexAdvantagesHttpItem } from '@/api/http/indexAdvantagesHttp/indexAdvantagesHttp.types';

const BASE_PATH = '/index_advantages';

const fetchIndexAdvantagesItems = async () => {
  const response = await useAppFetch<indexAdvantagesHttpItem[]>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const indexAdvantagesHttp = {
  fetchIndexAdvantagesItems,
};
