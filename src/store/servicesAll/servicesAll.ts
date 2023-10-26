import { ref } from 'vue';
import { defineStore } from 'pinia';

import { servicesAllHttp } from '@/api/http';
import type { ServicesAllItemParent, ServicesAllItemsData, ServicesAllState } from './servicesAll.types';

const DEFAULT_STATE: ServicesAllState = {
  servicesAllItems: [],
};

export const servicesAllStore = defineStore('servicesAllStore', () => {
  const state = ref(DEFAULT_STATE);

  const setServicesAllItems = (items: ServicesAllItemParent[]) => {
    state.value.servicesAllItems = items;
  };

  const fetchServicesAll = async () => {
    try {
      const { data } = await servicesAllHttp.fetchServicesAll();
      // console.log(data.value);

      setServicesAllItems((data.value as ServicesAllItemsData).data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchServicesAll,
    },
  };
});
