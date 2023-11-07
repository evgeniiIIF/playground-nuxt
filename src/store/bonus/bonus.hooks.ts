import { storeToRefs } from 'pinia';
import {bonusStore} from "@/store/bonus/bonus";

export const useBonusStore = () => {
  const { actions, effects } = bonusStore();
  const { state } = storeToRefs(bonusStore());

  return {
    bonusState: state,
    bonusActions: actions,
    bonusEffects: effects,
  };
};
