import { useMediaSizes } from '@/composables/useMediaSizes';

const { isMobile } = useMediaSizes();

export const mobileMode = () => {
  isMobile ? document.body.classList.add('mobile-mode') : document.body.classList.remove('mobile-mode');
};
