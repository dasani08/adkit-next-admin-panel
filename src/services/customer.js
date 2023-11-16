import http from '@/lib/utils/http';

export const getCustomers = () => {
  return http.get('/api/customers');
};
