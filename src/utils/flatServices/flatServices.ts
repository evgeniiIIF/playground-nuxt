import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

const flatServices = (services: ServicesAllItem[]) => {
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
