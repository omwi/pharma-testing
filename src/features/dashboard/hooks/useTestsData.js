import { useMemo } from 'react';

import { useGetTotalTestsQuery } from '@/app/api';

export default function useTestsData() {
  const result = useGetTotalTestsQuery();
  return useMemo(() => result, [result]);
}
