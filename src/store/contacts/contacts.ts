import { ref } from 'vue';
import { defineStore } from 'pinia';

import { contactsHttp } from '@/api/http';
import type { Contacts, ContactsStore, Social, WidgetSocial } from '@/store/contacts/contacts.types';

const DEFAULT_STATE: ContactsStore = {
  contacts: {},
  socials: [],
  widget: [],
};

export const contactsStore = defineStore('contactsStore', () => {
  const state = ref(DEFAULT_STATE);

  const setContacts = (data: Contacts | {}) => {
    state.value.contacts = data;
  };

  const setContactsSocials = (data: Social[] | []) => {
    state.value.socials = data;
  };

  const setContactsWidget = (data: WidgetSocial[] | []) => {
    state.value.widget = data;
  };
  const fetchContacts = async () => {
    try {
      const { data } = await contactsHttp.fetchContacts();

      setContacts(data.value?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContactsSocials = async () => {
    try {
      const { data } = await contactsHttp.fetchContactsSocials();

      setContactsSocials(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContactsWidget = async () => {
    try {
      const { data } = await contactsHttp.fetchContactsWidget();

      setContactsWidget(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchContacts,
      fetchContactsSocials,
      fetchContactsWidget,
    },
  };
});
