import { useMemo } from 'react';

import { useGetProcessDetailsQuery } from '@/app/api';

export function useProcessDetails(id) {
  const result = useGetProcessDetailsQuery(id);
  return useMemo(() => result, [result]);
}
