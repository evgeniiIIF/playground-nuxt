import { useAppFetch } from '@/composables/useAppFetch';
import type {
  LeadsCalculationForm,
  LeadsCallbackForm,
  LeadsResponse,
  LeadsServiceForm,
} from '@/api/http/leadsHttp/leadsHttp.types';

const BASE_PATH = '/leads';

const postServiceForm = async (data: LeadsServiceForm) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));

  const response = await useAppFetch<LeadsResponse>(`${BASE_PATH}`, {
    method: 'POST',
    body: formData,
  });

  return response;
};

const postCalculationForm = async (data: LeadsCalculationForm) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));

  const response = await useAppFetch<LeadsResponse>(`${BASE_PATH}`, {
    method: 'POST',
    body: formData,
  });

  return response;
};

const postCallbackForm = async (data: LeadsCallbackForm) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));

  const response = await useAppFetch<LeadsResponse>(`${BASE_PATH}`, {
    method: 'POST',
    body: formData,
  });

  return response;
};

export const leadsHttp = {
  postServiceForm,
  postCalculationForm,
  postCallbackForm,
};
