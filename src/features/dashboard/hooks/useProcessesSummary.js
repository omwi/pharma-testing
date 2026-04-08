import { useMemo } from 'react';

import { useGetWeekSummaryQuery } from '@/app/api';

export function useProcessesSummary() {
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

  const weekTotal = data.tests.reduce((acc, i) => acc + i.total, 0);
  const weekPreclinical = data.tests.reduce((acc, i) => acc + i.preclinical, 0);
  const weekClinical = data.tests.reduce((acc, i) => acc + i.clinical, 0);
  const weekRegulatory = data.tests.reduce((acc, i) => acc + i.regulatory, 0);

  return {
    ...rest,
    data: {
      regulatoryPercent: weekRegulatory / weekTotal,
      clinicalPercent: weekClinical / weekTotal,
      preclinicalPercent: weekPreclinical / weekTotal,
    },
  };
}
