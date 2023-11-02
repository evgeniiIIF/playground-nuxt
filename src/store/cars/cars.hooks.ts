import { storeToRefs } from 'pinia';
import { carsStore } from '@/store/cars/cars';

export const useCarsStore = () => {
  const { actions, effects } = carsStore();
  const { state } = storeToRefs(carsStore());

  return {
    carsState: state,
    carsActions: actions,
    carsEffects: effects,
  };
};
