// import { ref } from 'vue';
import { defineStore } from 'pinia';

import { servicesTitleHttp } from '@/api/http';
import type { ServicesTitleItem, ServicesTitleState } from './servicesTitle.types';

const DEFAULT_STATE: ServicesTitleState = {
  servicesTitleItems: [],
};

export const servicesTitleStore = defineStore('servicesTitleStore', () => {
  const state = ref(DEFAULT_STATE);

  const setServicesTitleItems = (items: ServicesTitleItem[]) => {
    state.value.servicesTitleItems = items;
  };

  const fetchServicesTitle = async (title: string) => {
    try {
      const { data } = await servicesTitleHttp.fetchServicesTitleHttp(title);

      setServicesTitleItems(data.value as ServicesTitleItem[]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchServicesTitle,
    },
  };
});
