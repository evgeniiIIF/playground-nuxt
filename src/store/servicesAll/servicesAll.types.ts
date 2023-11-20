export interface ServicesAllItem {
  id: number;
  parent_id: any;
  title: string;
  slug: string;
  price: number;
  icon?: string;
  full_path: string;
  children: ServicesAllItem[];
}

export interface changedServicesAllItem extends ServicesAllItem {
  checked: boolean;
}

export interface ServicesAllItemsData {
  data: ServicesAllItem[];
}

export interface ServicesAllState {
  servicesAllItems: ServicesAllItem[];
  chooseServices: ServicesAllItem[];
}

// emits
export interface ServicesAllItemEmits {
  (event: 'goTo', item: ServicesAllItem | undefined): void;
  (event: 'closeServicesAllModal'): void;
}
