export const appRoutes = {
  main: () => ({ path: '/' }),
  categories: (id?: any) => ({ path: `/categories/${id}` }),
  offers: (slug?: any) => ({ path: `/offers/${slug}` }),
  services: (slug?: any) => ({ path: `/services/${slug}` }),
  about: () => ({ path: '/about' }),
  contacts: () => ({ path: '/contacts' }),
  bonus: () => ({ path: '/bonus' }),
};
