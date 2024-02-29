import { Promo } from '../types/Promo';
import { request } from '../utils/fetchClient';

export const getPromos = (): Promise<Promo[]> => {
  return request('promos');
};
