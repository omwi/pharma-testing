import { useGetTotalTestsQuery } from '@/app/api';

export default function useTestsData() {
  return useGetTotalTestsQuery();
}
