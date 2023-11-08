import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { HomeAboutSlide } from '@/store/homeAboutSlider/homeAboutSlider.types';
import { homeAboutSliderHttp } from '@/api/http/homeAboutSliderHttp/homeAboutSliderHttp';

const DEFAULT_STATE: HomeAboutSlide[] = [];

export const homeAboutSliderStore = defineStore('homeAboutSliderStore', () => {
  const state = ref(DEFAULT_STATE);

  const setHomeAboutSlider = (data: HomeAboutSlide[]) => {
    state.value = data;
  };

  const fetchHomeAboutSlider = async () => {
    try {
      const { data } = await homeAboutSliderHttp.fetchHomeAboutSlider();

      setHomeAboutSlider(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchHomeAboutSlider,
    },
  };
});
