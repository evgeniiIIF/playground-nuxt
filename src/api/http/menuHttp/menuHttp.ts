import { useAppFetch } from '@/composables/useAppFetch';
import type { MenuResponse } from '@/api/http/menuHttp/menuHttp.types';

const BASE_PATH = '/menu';

const fetchHeaderMenu = async () => {
  const path = `${BASE_PATH}/header_menu`;

  const response = await useAppFetch<MenuResponse>(path, {
    method: 'GET',
  });

  return response;
};

const fetchFooterServicesMenu = async () => {
  const path = `${BASE_PATH}/footer_menu_services`;

  const response = await useAppFetch<MenuResponse>(path, {
    method: 'GET',
  });

  return response;
};

const fetchFooterAdditionalServicesMenu = async () => {
  const path = `${BASE_PATH}/footer_menu_additional_services`;

  const response = await useAppFetch<MenuResponse>(path, {
    method: 'GET',
  });

  return response;
};

const fetchFooterAboutCompanyMenu = async () => {
  const path = `${BASE_PATH}/footer_menu_about_company`;

  const response = await useAppFetch<MenuResponse>(path, {
    method: 'GET',
  });

  return response;
};

export const menuHttp = {
  fetchHeaderMenu,
  fetchFooterServicesMenu,
  fetchFooterAdditionalServicesMenu,
  fetchFooterAboutCompanyMenu,
};
