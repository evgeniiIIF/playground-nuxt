import { useAppFetch } from '@/composables/useAppFetch';
import type { Welcome } from '@/store/welcome/welcome.types';

const BASE_PATH = '/index_welcome';

const fetchWelcome = async () => {
  const response = await useAppFetch<Welcome[]>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const welcomeHttp = {
  fetchWelcome,
};
