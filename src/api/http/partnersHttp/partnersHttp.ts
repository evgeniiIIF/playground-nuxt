import { useAppFetch } from '@/composables/useAppFetch';
import type { partnersResponse } from '~/api/http/partnersHttp/partnersHttp.types';
import type { PartnersItems } from '~/store/partners/partners.types';

const BASE_PATH = '/partners';

const fetchPartners = async () => {
  const response = await useAppFetch<partnersResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

const fetchPartnersItems = async () => {
  const path = `${BASE_PATH}_items`;
  const response = await useAppFetch<PartnersItems[]>(`${path}`, {
    method: 'GET',
  });

  return response;
};

export const partnersHttp = {
  fetchPartners,
  fetchPartnersItems,
};
