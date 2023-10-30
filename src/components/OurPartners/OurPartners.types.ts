import type { PartnersItems } from '~/store/partners/partners.types';

export type OurPartners = {
  partners: {
    title: string | undefined;
    subtitle: string | undefined;
    items: PartnersItems[] | undefined;
  };
};
