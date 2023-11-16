export interface MenuItem {
  id: number;
  title: string;
  link: string;
  is_active: string;
  is_modal: string;
}

export interface MenuStore {
  headerMenu: MenuItem[];
  footerServicesMenu: MenuItem[];
  footerAdditionalServicesMenu: MenuItem[];
  footerAboutCompanyMenu: MenuItem[];
}
