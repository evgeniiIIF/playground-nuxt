export interface AdditionalService {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  sort_order: number;
  parent_id: number;
  nest_left: number;
  nest_right: number;
  nest_depth: number;
  is_active: number;
  is_in_bonus_program: number;
  title: string;
  subtitle: string | null;
  slug: string;
  preview_text: string;
  full_text: string;
  price: number;
  old_price: number | null;
  extra: null;
  additional_title: string | null;
  parents: string;
  full_path: string;
}

export interface Service {
  id: number;
  slug: string;
  is_active: number;
  is_in_bonus_program: number;
  image_origin: string;
  image_webp: string;
  gallery_origin: string[];
  gallery_webp: string[];
  title: string;
  subtitle: string | null;
  preview_text: string;
  full_text: string;
  price: number;
  old_price: number | null;
  created_at: string;
  updated_at: string;
  additional_title: string | null;
  offers: [];
  additional_services: AdditionalService[];
  seo: null;
}
