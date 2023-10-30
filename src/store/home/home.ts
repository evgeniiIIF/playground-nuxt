import { ref } from 'vue';
import { defineStore } from 'pinia';

import { homeHttp } from '@/api/http';
import type { Home } from './home.types';

const DEFAULT_STATE: Partial<Home> = {};

export const homeStore = defineStore('homeStore', () => {
  const state = ref(DEFAULT_STATE);

  const setHome = (data: Home | {}) => {
    state.value = data;
  };

  const fetchHome = async () => {
    try {
      const { data } = await homeHttp.fetchHome();

      setHome(data.value?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchHome,
    },
  };
});
