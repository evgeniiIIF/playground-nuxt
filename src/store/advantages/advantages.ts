import { defineStore } from 'pinia';

import { advantagesHttp } from '@/api/http/';

import type { AdvantagesHttpItem } from '@/api/http/advantagesHttp/advantagesHttp.types';

const DEFAULT_STATE: AdvantagesHttpItem[] = [];

export const advantagesStore = defineStore('advantagesStore', () => {
  const state = ref(DEFAULT_STATE);

  const setadvantagesItems = (data: AdvantagesHttpItem[]) => {
    state.value = data;
  };

  const fetchadvantagesItems = async () => {
    try {
      const { data } = await advantagesHttp.fetchadvantagesItems();
      console.log(data);

      setadvantagesItems(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchadvantagesItems,
    },
  };
});
