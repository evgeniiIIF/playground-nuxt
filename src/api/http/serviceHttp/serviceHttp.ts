import { useAppFetch } from '@/composables/useAppFetch';
import type { ServiceHttpData } from '@/api/http/serviceHttp/serviceHttp.types';

const BASE_PATH = '/services';

const fetchService = async (slug: string) => {
  const path = `${BASE_PATH}/${slug}`;
  const response = await useAppFetch<ServiceHttpData>(path, {
    method: 'GET',
  });

  return response;
};

export const serviceHttp = {
  fetchService,
};
