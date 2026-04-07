import { Bar, BarChart, Tooltip } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';

import * as styles from './total-summary-card.module.css';

const stats = [
  {
    date: '2026-06-01',
    total: 10,
    ready: 8,
  },
  {
    date: '2026-06-02',
    total: 12,
    ready: 9,
  },
  {
    date: '2026-06-03',
    total: 8,
    ready: 6,
  },
  {
    date: '2026-06-04',
    total: 15,
    ready: 12,
  },
  {
    date: '2026-06-05',
    total: 11,
    ready: 7,
  },
  {
    date: '2026-06-06',
    total: 9,
    ready: 8,
  },
  {
    date: '2026-06-07',
    total: 13,
    ready: 10,
  },
];

export default function TotalSummaryCard() {
  const data = stats.map((i) => ({
    percent: i.total > 0 ? Math.floor((i.ready / i.total) * 100) : 0,
  }));

  return (
    <ChartCard
      title="Total tested drugs"
      subTitle="Last 7 days"
      total={12341}
      rate={0.6832}
    >
      <BarChart data={data} responsive className={styles.chart}>
        <Bar
          dataKey="percent"
          fill="var(--chart-color-1)"
          radius={10}
          barSize={6}
          background={{ fill: 'var(--background-muted)', radius: 10 }}
        />
        <Tooltip />
      </BarChart>
    </ChartCard>
  );
}
