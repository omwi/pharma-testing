import { useGetProcessesQuery } from '@/app/api';

export function useProcesses() {
  return useGetProcessesQuery();
}
