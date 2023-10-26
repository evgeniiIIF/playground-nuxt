export interface OffersItem {
  id: number;
  slug: string;
  is_active: number;
  title: string;
  subtitle: any;
  preview_text: string;
  image: string;
  image_mobile?: string | null;
  created_at: string;
  updated_at: string;
}

export interface OffersState {
  offersItems: OffersItem[];
}
