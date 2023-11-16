import http from '@/lib/utils/http';

export const getSaleOrders = () => {
  return http.get('/api/orders');
};

export const getSaleStats = () => {
  return http.get('/api/stats/order');
};
