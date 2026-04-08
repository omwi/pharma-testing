import { useMemo } from 'react';

import { useGetWeekSummaryQuery } from '@/app/api';

export function usePeopleSummary() {
  const result = useGetWeekSummaryQuery(undefined, {
    selectFromResult: selectResult,
  });
  return useMemo(() => result, [result]);
}

function selectResult(result) {
  const { data, ...rest } = result;
  if (!data) {
    return result;
  }

  const testedPercent =
    data.peopleTarget > 0 ? data.peopleTested / data.peopleTarget : 1;
  const nonTestedPercent = 1 - testedPercent;

  return {
    ...rest,
    data: {
      testedPercent,
      nonTestedPercent,
    },
  };
}
