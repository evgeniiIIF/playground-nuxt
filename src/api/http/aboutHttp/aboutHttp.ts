import { useAppFetch } from '@/composables/useAppFetch';
import type { AboutResponse } from '@/api/http/aboutHttp/aboutHttp.types';
import type { AboutCertificate, AboutSlide } from '@/store/about/about.types';

const BASE_PATH = '/about';

const fetchAbout = async () => {
  const response = await useAppFetch<AboutResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

const fetchAboutSlider = async () => {
  const path = `${BASE_PATH}_slider`;

  const response = await useAppFetch<AboutSlide[]>(`${path}`, {
    method: 'GET',
  });

  return response;
};

const fetchAboutCertificates = async () => {
  const path = `${BASE_PATH}_certificates`;

  const response = await useAppFetch<AboutCertificate[]>(`${path}`, {
    method: 'GET',
  });

  return response;
};
export const aboutHttp = {
  fetchAbout,
  fetchAboutSlider,
  fetchAboutCertificates,
};
