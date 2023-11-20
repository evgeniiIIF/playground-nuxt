import { defineStore } from 'pinia';

import { indexAdvantagesHttp } from '@/api/http/';

import type { indexAdvantagesHttpItem } from '~/api/http/indexAdvantagesHttp/indexAdvantagesHttp.types';

const DEFAULT_STATE: indexAdvantagesHttpItem[] = [];

export const indexAdvantagesStore = defineStore('indexAdvantagesStore', () => {
  const state = ref(DEFAULT_STATE);

  const setIndexAdvantagesItems = (data: indexAdvantagesHttpItem[]) => {
    state.value = data;
  };

  const fetchIndexAdvantagesItems = async () => {
    try {
      const { data } = await indexAdvantagesHttp.fetchIndexAdvantagesItems();
      console.log(data);

      setIndexAdvantagesItems(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchIndexAdvantagesItems,
    },
  };
});
