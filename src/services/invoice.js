import http from '@/lib/utils/http';

export const getInvoices = () => {
  return http.get('/api/invoices');
};
