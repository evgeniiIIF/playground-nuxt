export interface About {
  id: number;
  site_id: number;
  site_root_id: number;
  blueprint_uuid: string;
  content_group: null;
  title: string;
  slug: string;
  is_enabled: number;
  published_at: null;
  published_at_date: string;
  expired_at: null;
  draft_mode: number;
  primary_id: null;
  primary_attrs: null;
  is_version: number;
  subtitle: string;
  title_text: string;
  text: string;
  link_text: string;
  link_url: string;
  certificates_title: string;
  certificates_subtitle: string;
  guarantee_title: string;
  guarantee_text: string;
  partnership_title: string;
  partnership_text: string;
  partnership_link_text: string;
  partnership_link_url: string;
  show_btn: number;
  title_link: string;
  created_user_id: null;
  updated_user_id: null;
  deleted_user_id: null;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  is_active_slider: number;
  is_active_text: number;
  is_active_certificates: number;
  is_active_guarantee: number;
  is_active_partner: number;
  is_active_partnership: number;
}

export interface AboutSlide {
  id: number;
  image: string;
  image_webp: string;
  image_title: string | null;
  image_desc: string | null;
}

export interface AboutCertificate {
  id: number;
  image: string;
  image_webp: string;
  image_title: string | null;
  image_desc: string | null;
}

export interface AboutStore {
  about: About | {};
  aboutSlider: AboutSlide[] | [];
  aboutCertificates: AboutCertificate[] | [];
}
