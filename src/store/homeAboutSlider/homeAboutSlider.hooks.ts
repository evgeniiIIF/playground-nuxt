import { storeToRefs } from 'pinia';
import { homeAboutSliderStore } from '~/store/homeAboutSlider/homeAboutSlider';

export const useHomeAboutSliderStore = () => {
  const { actions, effects } = homeAboutSliderStore();
  const { state } = storeToRefs(homeAboutSliderStore());

  return {
    homeAboutSliderState: state,
    homeAboutSliderActions: actions,
    homeAboutSliderEffects: effects,
  };
};
