import { useAppFetch } from '@/composables/useAppFetch';
import type { HomeAboutSlide } from '@/store/homeAboutSlider/homeAboutSlider.types';

const BASE_PATH = '/index_about_slider';

const fetchHomeAboutSlider = async () => {
  const response = await useAppFetch<HomeAboutSlide[]>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const homeAboutSliderHttp = {
  fetchHomeAboutSlider,
};
