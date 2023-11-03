import type { AdditionalService } from '@/store/service/service.types';

export type PopularServices = {
  title?: string | null;
  additionalServices?: AdditionalService[];
};
