import type {HomeAboutSlide} from "~/store/homeAboutSlider/homeAboutSlider.types";

export type AboutCompany = {
  company: {
    title: string | undefined;
    description: string | undefined;
    titleLink: string | undefined;
    urlLink: string | undefined;
  };

  companySlider: HomeAboutSlide[];
};
