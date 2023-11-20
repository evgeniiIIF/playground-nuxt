import { storeToRefs } from 'pinia';
import { indexAdvantagesStore } from './indexAdvantages';

export const useIndexAdvantagesStore = () => {
  const { actions, effects } = indexAdvantagesStore();
  const { state } = storeToRefs(indexAdvantagesStore());

  return {
    indexAdvantagesState: state,
    indexAdvantagesActions: actions,
    indexAdvantagesEffects: effects,
  };
};
