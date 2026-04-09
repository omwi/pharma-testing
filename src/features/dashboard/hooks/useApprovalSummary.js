import { useGetWeekSummaryQuery } from '@/app/api';
import { dateToShort } from '@/utils/string';

export function useApprovalSummary() {
  return useGetWeekSummaryQuery(undefined, {
    selectFromResult: selectResult,
  });
}

function selectResult(result) {
  const { data, ...rest } = result;
  if (!data) {
    return result;
  }

  return {
    ...rest,
    data: {
      tests: data.tests.map((t) => ({
        date: dateToShort(t.date),
        approved: t.approved,
        rejected: t.total - t.approved,
      })),
      approvalRate: data.approvalRate,
      approvalNum: data.approvalNum,
    },
  };
}
