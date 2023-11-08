export interface Contacts {
  id: number;
  site_id: number;
  site_root_id: number;
  blueprint_uuid: string;
  content: {
    phone: string;
    email: string;
    address: string;
    schedule: string;
    route_link: string;
    copyright: string;
    is_active_widget: string;
  };
  deleted_at: null;
  created_at: string;
  updated_at: string;
  phone: string;
  email: string;
  address: string;
  schedule: string;
  route_link: string;
  copyright: string;
  is_active_widget: string;
}

export interface Social {
  id: number;
  is_active_header: number;
  is_active_footer: string;
  is_active_mobile: string;
  name: string;
  link: string;
  icon_footer: string;
  icon_header: string;
  icon_mobile: string;
}

export interface WidgetIcon {
  id: number;
  is_active_widget: string;
  name: string;
  link: string;
  icon_widget: string;
}

export interface ContactsStore {
  contacts: Contacts | {};
  socials: Social[];
  widget: WidgetIcon[];
}
