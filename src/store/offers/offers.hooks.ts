import { storeToRefs } from 'pinia';
import { offersStore } from './offers';

export const useOffersStore = () => {
  const { actions, effects } = offersStore();
  const { state } = storeToRefs(offersStore());

  return {
    offersState: state,
    offersActions: actions,
    offersEffects: effects,
  };
};
