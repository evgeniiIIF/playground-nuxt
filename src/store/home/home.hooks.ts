import { storeToRefs } from 'pinia';
import { homeStore } from '~/store/home/home';

export const useHomeStore = () => {
  const { actions, effects } = homeStore();
  const { state } = storeToRefs(homeStore());

  return {
    homeState: state,
    homeActions: actions,
    homeEffects: effects,
  };
};
