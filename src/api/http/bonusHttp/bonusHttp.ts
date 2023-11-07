import { useAppFetch } from '@/composables/useAppFetch';
import type { BonusRespone } from '@/api/http/bonusHttp/bonusHttp.types';
import type { BonusBenefit } from '@/store/bonus/bonus.types';

const BASE_PATH = '/bonus';

const fetchBonus = async () => {
  const response = await useAppFetch<BonusRespone>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

const fetchBonusBenefits = async () => {
  const path = `${BASE_PATH}_benefits`;
  const response = await useAppFetch<BonusBenefit[]>(`${path}`, {
    method: 'GET',
  });

  return response;
};
export const bonusHttp = {
  fetchBonus,
  fetchBonusBenefits,
};
