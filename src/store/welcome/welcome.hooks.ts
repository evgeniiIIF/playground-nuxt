import { storeToRefs } from 'pinia';
import { welcomeStore } from '@/store/welcome/welcome';

export const useWelcomeStore = () => {
  const { actions, effects } = welcomeStore();
  const { state } = storeToRefs(welcomeStore());

  return {
    welcomeState: state,
    welcomeActions: actions,
    welcomeEffects: effects,
  };
};
