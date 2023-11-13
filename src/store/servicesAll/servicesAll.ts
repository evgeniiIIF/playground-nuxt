import { ref } from 'vue';
import { defineStore } from 'pinia';

import { servicesAllHttp } from '@/api/http';
import type { ServicesAllItemParent, ServicesAllState, changedServicesAllItemChild } from './servicesAll.types';

const DEFAULT_STATE: ServicesAllState = {
  servicesAllItems: [],
  chooseServices: [],
};

export const servicesAllStore = defineStore('servicesAllStore', () => {
  const state = ref(DEFAULT_STATE);

  const setServicesAllItems = (items: ServicesAllItemParent[]) => {
    state.value.servicesAllItems = items;
  };

  const fetchServicesAll = async () => {
    try {
      const { data } = await servicesAllHttp.fetchServicesAll();

      setServicesAllItems(data.value?.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const changeChooseService = (service: changedServicesAllItemChild) => {
    if (service.checked) {
      state.value.chooseServices.push(service);
    } else {
      state.value.chooseServices = state.value.chooseServices.filter((currService) => currService.id !== service.id);
    }
  };

  const clearChooseServices = () => {
    state.value.chooseServices = [];
  }

  return {
    state,
    actions: {
      changeChooseService,
      clearChooseServices,
    },
    effects: {
      fetchServicesAll,
    },
  };
});
