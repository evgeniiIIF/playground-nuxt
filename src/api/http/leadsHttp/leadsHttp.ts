import { useAppFetch } from '@/composables/useAppFetch';
import type { LeadsCalculationForm, LeadsResponse, LeadsServiceForm } from '@/api/http/leadsHttp/leadsHttp.types';

const BASE_PATH = '/leads';

const fetchServiceForm = async (data: LeadsServiceForm) => {
  const response = await useAppFetch<LeadsResponse>(`${BASE_PATH}`, {
    method: 'POST',
    body: JSON.stringify({
      form: 'shortServiceForm',
      ...data,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

const fetchCalculationForm = async (data: LeadsCalculationForm) => {
  const response = await useAppFetch<LeadsResponse>(`${BASE_PATH}`, {
    method: 'POST',
    body: JSON.stringify({
      form: 'fullServiceForm',
      ...data,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const leadsHttp = {
  fetchServiceForm,
  fetchCalculationForm,
};
