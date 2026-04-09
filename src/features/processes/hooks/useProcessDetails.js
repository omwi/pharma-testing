import { useGetProcessDetailsQuery } from '@/app/api';

export function useProcessDetails(id) {
  return useGetProcessDetailsQuery(id);
}
