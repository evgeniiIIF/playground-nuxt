import { storeToRefs } from 'pinia';
import { serviceStore } from './service';

export const useServiceStore = () => {
  const { actions, effects } = serviceStore();
  const { state } = storeToRefs(serviceStore());

  return {
    serviceState: state,
    serviceActions: actions,
    serviceEffects: effects,
  };
};
