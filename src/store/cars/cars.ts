import { ref } from 'vue';
import { defineStore } from 'pinia';

import { carsHttp } from '@/api/http';
import type { Cars } from '@/store/cars/cars.types';

const DEFAULT_STATE: Cars = {};
export const carsStore = defineStore('carsStore', () => {
  const state = ref(DEFAULT_STATE);

  const setCars = (data: Cars | {}) => {
    state.value = data;
  };

  const fetchCars = async () => {
    try {
      const { data } = await carsHttp.fetchCars();

      setCars(data.value?.list ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchCars,
    },
  };
});
