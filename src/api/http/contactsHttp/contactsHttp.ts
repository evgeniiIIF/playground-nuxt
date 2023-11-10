import { useAppFetch } from '@/composables/useAppFetch';
import type { ContactsResponse } from '@/api/http/contactsHttp/contactsHttp.types';
import type { Social, WidgetSocial } from '@/store/contacts/contacts.types';

const BASE_PATH = '/contacts';

const fetchContacts = async () => {
  const response = await useAppFetch<ContactsResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

const fetchContactsSocials = async () => {
  const path = `${BASE_PATH}_socseti`;

  const response = await useAppFetch<Social[]>(`${path}`, {
    method: 'GET',
  });

  return response;
};

const fetchContactsWidget = async () => {
  const path = `${BASE_PATH}_vidzet`;

  const response = await useAppFetch<WidgetSocial[]>(`${path}`, {
    method: 'GET',
  });

  return response;
};
export const contactsHttp = {
  fetchContacts,
  fetchContactsSocials,
  fetchContactsWidget,
};
