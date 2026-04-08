import { useMemo } from 'react';

import { useGetProcessesQuery } from '@/app/api';

export function useProcesses() {
  const result = useGetProcessesQuery();
  return useMemo(() => result, [result]);
}
