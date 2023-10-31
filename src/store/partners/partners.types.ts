export interface PartnersItems {
  id: number;
  title: string;
  logo: string;
}

export interface Partners {
  id: number;
  site_id: number;
  site_root_id: number;
  blueprint_uuid: string;
  content: {
    is_active: string;
    title: string;
    subtitle: string;
  };
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
  is_active: string;
  title: string;
  subtitle: string;
  items: PartnersItems[];
}
