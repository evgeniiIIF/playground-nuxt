export interface Bonus {
  id: number,
  site_id: number,
  site_root_id: number,
  blueprint_uuid: string,
  content_group: null,
  title: string,
  slug: string,
  is_enabled: number,
  published_at: null,
  published_at_date: string,
  expired_at: null,
  draft_mode: number,
  primary_id: null,
  primary_attrs: null,
  is_version: number,
  subtitle: string,
  created_user_id: null,
  updated_user_id: null,
  deleted_user_id: null,
  deleted_at: null,
  created_at: string,
  updated_at: string,
  _section1: null,
  is_active_btn_bonus: number,
  btn_bonus_title: string,
  btn_bonus_link: string
}

export interface BonusBenefit {
  id: number;
  headline: string;
  dsc: string;
}

export interface BonusStore {
  bonus: Bonus | {};
  benefits: BonusBenefit[] | [];
}
