import { ref } from 'vue';
import { defineStore } from 'pinia';

import { offersHttp } from '@/api/http';
import type { OffersItem, OffersItemSlug, OffersState } from './offers.types';

const DEFAULT_STATE: OffersState = {
  offersItems: [],
  offersItemSlug: {} as OffersItemSlug,
};

export const offersStore = defineStore('offersStore', () => {
  const state = ref(DEFAULT_STATE);

  const setOffersItems = (items: OffersItem[]) => {
    state.value.offersItems = items;
  };
  const setOffersItemSlug = (item: OffersItemSlug) => {
    state.value.offersItemSlug = item;
  };

  const fetchOffersItems = async (slug?: string) => {
    try {
      const { data } = await offersHttp.fetchOffers(slug);

      slug
        ? setOffersItemSlug((data.value?.data as OffersItemSlug) ?? {})
        : setOffersItems((data.value?.data as OffersItem[]) ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchOffersItems,
    },
  };
});
