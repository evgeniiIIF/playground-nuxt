import { ref } from 'vue';
import { defineStore } from 'pinia';

import { serviceHttp } from '@/api/http';
import type { Service } from '@/store/service/service.types';

const DEFAULT_STATE: Partial<Service> = {};

export const serviceStore = defineStore('serviceStore', () => {
  const state = ref(DEFAULT_STATE);

  const setService = (data: Service | {}) => {
    state.value = data;
    console.log(state.value);
  };

  const fetchService = async (slug: string) => {
    try {
      const { data } = await serviceHttp.fetchService(slug);

      setService(data.value?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchService,
    },
  };
});
