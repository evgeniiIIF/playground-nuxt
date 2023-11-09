import type { AboutSlide } from '@/store/about/about.types';

export type AboutWelcome = {
  aboutWelcome: {
    title: string;
    subtitle: string;
    slider: AboutSlide[];
  };
};
