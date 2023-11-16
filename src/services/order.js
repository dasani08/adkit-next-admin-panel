import http from '@/lib/utils/http';

export const getSaleOrders = () => {
  return http.get('/api/orders');
};
