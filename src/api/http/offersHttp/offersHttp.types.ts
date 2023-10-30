import type { OffersItem, OffersItemSlug } from '@/store/offers/offers.types';

export interface offersHttpResponse {
  data: OffersItem[] | OffersItemSlug;
}
