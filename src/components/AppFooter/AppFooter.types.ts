import type { Contacts, Social } from '@/store/contacts/contacts.types';
import type { MenuItem } from '@/store/menu/menu.types';

export type AppFooter = {
  contacts: Contacts;
  socials: Social[];
  servicesMenu: MenuItem[];
  additionalServicesMenu: MenuItem[];
};
