import { storeToRefs } from 'pinia';
import { servicesTitleStore } from './servicesTitle';

export const useServicesTitleStore = () => {
  const { actions, effects } = servicesTitleStore();
  const { state } = storeToRefs(servicesTitleStore());

  return {
    servicesTitleState: state,
    servicesTitleActions: actions,
    servicesTitleEffects: effects,
  };
};
