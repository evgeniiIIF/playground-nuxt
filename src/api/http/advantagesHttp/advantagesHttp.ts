import { useAppFetch } from '@/composables/useAppFetch';

import type { AdvantagesHttpItem } from '@/api/http/advantagesHttp/advantagesHttp.types';

const BASE_PATH = '/index_advantages';

const fetchadvantagesItems = async () => {
  const response = await useAppFetch<AdvantagesHttpItem[]>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const advantagesHttp = {
  fetchadvantagesItems,
};
