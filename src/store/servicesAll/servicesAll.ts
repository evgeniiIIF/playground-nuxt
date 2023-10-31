import { ref } from 'vue';
import { defineStore } from 'pinia';

import { servicesAllHttp } from '@/api/http';
import type { ServicesAllItemChild, ServicesAllItemParent, ServicesAllState } from './servicesAll.types';

const DEFAULT_STATE: ServicesAllState = {
  servicesAllItems: [],
  chooseServices: [],
};

const changeServices = (service: ServicesAllItemParent) => {
  const { children } = service;

  return {
    ...service,
    children: children.map((child) => {
      const childChildren = child.children;

      return {
        ...child,
        checked: false,
        children: childChildren?.map((c) => {
          return {
            ...c,
            checked: false,
          };
        }),
      };
    }),
  };
};

export const servicesAllStore = defineStore('servicesAllStore', () => {
  const state = ref(DEFAULT_STATE);

  const setServicesAllItems = (items: ServicesAllItemParent[]) => {
    state.value.servicesAllItems = items;
  };

  // const setChangedServicesAllItems = (items: ServicesAllItemParent[]) => {
  //   state.value.changedServicesAllItems = items.map(service => changeServices(service))
  // }

  const fetchServicesAll = async () => {
    try {
      const { data } = await servicesAllHttp.fetchServicesAll();

      const changedServices = data.value?.data.map((service) => changeServices(service));

      setServicesAllItems(changedServices ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const addChooseService = (service: ServicesAllItemChild) => {
    state.value.chooseServices.push(service);
    console.log(state.value.chooseServices);
  };

  const removeChooseService = (service: ServicesAllItemChild) => {
    state.value.chooseServices = state.value.chooseServices.filter((currService) => currService.id !== service.id);
  };

  const changeService = (service: ServicesAllItemChild) => {
    const parent = state.value.servicesAllItems.find((serviceParent) => serviceParent.id === service.parent_id);

    parent?.children.forEach((child) => {
      if (child.id === service.id) {
        child.checked = false;
      } else {
        child.children?.forEach((c) => {
          if (child.id === c.id) {
            c.checked = false;
          }
        });
      }
    });
  };

  return {
    state,
    actions: {
      addChooseService,
      removeChooseService,
      changeService,
    },
    effects: {
      fetchServicesAll,
    },
  };
});
