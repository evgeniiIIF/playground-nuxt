import { storeToRefs } from 'pinia';
import { partnersStore } from '@/store/partners/partners';

export const usePartnersStore = () => {
  const { actions, effects } = partnersStore();
  const { state } = storeToRefs(partnersStore());

  return {
    partnersState: state,
    partnersActions: actions,
    partnersEffects: effects,
  };
};
