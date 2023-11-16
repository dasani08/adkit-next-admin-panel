import http from '@/lib/utils/http';

export const getRoles = () => {
  return http.get('/api/roles');
};
