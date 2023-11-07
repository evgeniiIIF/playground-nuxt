import { ref } from 'vue';
import { defineStore } from 'pinia';

import type {Bonus, BonusBenefit, BonusStore} from "@/store/bonus/bonus.types";
import {bonusHttp} from "@/api/http";

const DEFAULT_STATE: BonusStore = {
  bonus: {},
  benefits: [],
};

export const bonusStore = defineStore('bonusStore', () => {
  const state = ref(DEFAULT_STATE);

  const setBonus = (data: Bonus | {}) => {
    state.value.bonus = data;
  };

  const setBonusBenefits = (data: BonusBenefit[] | []) => {
    state.value.benefits = data;
  };

  const fetchBonus = async () => {
    try {
      const { data } = await bonusHttp.fetchBonus();

      setBonus(data.value?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBonusBenefits = async () => {
    try {
      const { data } = await bonusHttp.fetchBonusBenefits();

      setBonusBenefits(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchBonus,
      fetchBonusBenefits
    },
  };
});
