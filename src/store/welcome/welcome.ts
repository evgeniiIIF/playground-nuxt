import { ref } from 'vue';
import { defineStore } from 'pinia';

import { welcomeHttp } from '@/api/http';
import type { Welcome } from '@/store/welcome/welcome.types';

const DEFAULT_STATE: Welcome[] = [];
export const welcomeStore = defineStore('welcomeStore', () => {
  const state = ref(DEFAULT_STATE);

  const setWelcome = (data: Welcome[]) => {
    state.value = data;
  };

  const fetchWelcome = async () => {
    try {
      const { data } = await welcomeHttp.fetchWelcome();

      setWelcome(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchWelcome,
    },
  };
});
