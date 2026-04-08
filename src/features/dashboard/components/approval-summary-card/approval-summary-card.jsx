import { Line, LineChart, Tooltip, XAxis } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';

import { useApprovalSummary } from '../../hooks/useApprovalSummary';
import * as styles from './approval-summary-card.module.css';

export default function ApprovalSummaryCard() {
  const { data, isLoading, isFetching, isUninitialized } = useApprovalSummary();

  if (isLoading || isFetching || isUninitialized) return null;

  const { tests, approvalRate, approvalNum } = data;

  const ticks = [tests[0].date, tests[tests.length - 1].date];

  return (
    <ChartCard
      title="Drug approval rates"
      subTitle="Last 7 days"
      total={approvalNum}
      rate={approvalRate}
    >
      <LineChart data={tests} className={styles.chart} responsive>
        <XAxis
          dataKey={(t) => t.date}
          interval="preserveStartEnd"
          ticks={ticks}
        />

        <Line
          name="Approved"
          dataKey={(t) => t.approved}
          stroke="var(--chart-color-1)"
          dot={false}
          strokeWidth={2}
        />
        <Line
          name="Rejected"
          dataKey={(t) => t.rejected}
          stroke="var(--chart-color-2)"
          dot={false}
        />

        <Tooltip />
      </LineChart>
    </ChartCard>
  );
}
