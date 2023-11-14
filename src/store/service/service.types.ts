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

export interface GalleryOriginTypes {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: any;
  description: any;
  field: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  path: string;
  extension: string;
}

export interface Service {
  id: number;
  slug: string;
  is_active: number;
  is_in_bonus_program: number;
  image_origin: string;
  image_webp: string;
  gallery_origin: GalleryOriginTypes[];
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
