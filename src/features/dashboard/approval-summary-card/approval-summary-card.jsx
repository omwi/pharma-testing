import { Line, LineChart, Tooltip, XAxis } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';
import { dateToShort } from '@/utils/string';

import * as styles from './approval-summary-card.module.css';

const stats = [
  [
    {
      date: '2026-06-01',
      ready: 8,
      approved: 2,
    },
    {
      date: '2026-06-02',
      ready: 9,
      approved: 3,
    },
    {
      date: '2026-06-03',
      ready: 6,
      approved: 1,
    },
    {
      date: '2026-06-04',
      ready: 12,
      approved: 4,
    },
    {
      date: '2026-06-05',
      ready: 7,
      approved: 2,
    },
    {
      date: '2026-06-06',
      ready: 8,
      approved: 3,
    },
    {
      date: '2026-06-07',
      ready: 10,
      approved: 3,
    },
  ],
];

export default function ApprovalSummaryCard() {
  const data = stats[0].map((i) => ({
    date: dateToShort(i.date),
    rejected: i.ready - i.approved,
    approved: i.approved,
  }));

  const ticks = [data[0].date, data[data.length - 1].date];

  return (
    <ChartCard
      title="Drug approval rates"
      subTitle="Last 7 days"
      total={356}
      rate={0.265}
    >
      <LineChart data={data} className={styles.chart} responsive>
        <XAxis dataKey="date" interval="preserveStartEnd" ticks={ticks} />

        <Line
          dataKey="approved"
          stroke="var(--chart-color-1)"
          dot={false}
          strokeWidth={2}
        />
        <Line dataKey="rejected" stroke="var(--chart-color-2)" dot={false} />

        <Tooltip />
      </LineChart>
    </ChartCard>
  );
}
