import { ref } from 'vue';
import { defineStore } from 'pinia';

import { partnersHttp } from '@/api/http';
import type { Partners, PartnersItems } from './partners.types';

const DEFAULT_STATE: Partial<Partners> = {};

export const partnersStore = defineStore('partnersStore', () => {
  const state = ref(DEFAULT_STATE);

  const setPartners = (data: Partners | {}) => {
    state.value = data;
  };

  const setPartnersItems = (data: PartnersItems[]) => {
    state.value.items = data;
  };

  const fetchPartners = async () => {
    try {
      const { data } = await partnersHttp.fetchPartners();

      setPartners(data.value?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPartnersItems = async () => {
    try {
      const { data } = await partnersHttp.fetchPartnersItems();

      setPartnersItems(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchPartners,
      fetchPartnersItems,
    },
  };
});
