import type { ServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

const flatServices = (services: ServicesAllItemChild[]) => {
  return services
    .map((service) => {
      if (service.children?.length) {
        flatServices(service.children);
        return [service, ...service.children];
      }

      return service;
    })
    .flat();
};

export { flatServices };
