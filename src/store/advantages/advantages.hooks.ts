import { storeToRefs } from 'pinia';
import { advantagesStore } from './advantages';

export const useAdvantagesStore = () => {
  const { actions, effects } = advantagesStore();
  const { state } = storeToRefs(advantagesStore());

  return {
    advantagesState: state,
    advantagesActions: actions,
    advantagesEffects: effects,
  };
};
