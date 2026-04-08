import { useMemo } from 'react';

import { useGetWeekSummaryQuery } from '@/app/api';
import { dateToShort } from '@/utils/string';

export function useTotalSummary() {
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

  const tests = data.tests.map((t) => ({
    date: dateToShort(t.date),
    ready: t.ready,
    total: t.total,
  }));
  const weekTotal = data.tests.reduce((acc, i) => acc + i.total, 0);
  const weekReady = data.tests.reduce((acc, i) => acc + i.ready, 0);
  const completedPercent = weekReady / weekTotal;
  const awaitingPercent = (weekTotal - weekReady) / weekTotal;

  return {
    ...rest,
    data: {
      tests: tests,
      totalRate: data.totalRate,
      totalNum: data.totalNum,
      completedPercent,
      awaitingPercent,
    },
  };
}
