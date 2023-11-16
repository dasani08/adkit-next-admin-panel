import http from '@/lib/utils/http';

export const getUsers = () => {
  return http.get('/api/users');
};
