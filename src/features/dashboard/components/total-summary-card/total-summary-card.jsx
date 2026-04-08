import { Bar, BarChart, Tooltip } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';
import Legend from '@/components/ui/legend/legend';

import { useTotalSummary } from '../../hooks/useTotalSummary';
import * as styles from './total-summary-card.module.css';

export default function TotalSummaryCard() {
  const { data, isLoading, isFetching, isUninitialized } = useTotalSummary();

  if (isLoading || isFetching || isUninitialized) return null;

  const { tests, totalRate, totalNum, completedPercent, awaitingPercent } =
    data;
  const legendValues = [
    {
      name: 'Completed',
      percent: completedPercent,
      fill: 'var(--chart-color-1)',
    },
    {
      name: 'Awaiting results',
      percent: awaitingPercent,
      fill: 'var(--background-muted)',
    },
  ];

  return (
    <ChartCard
      title="Total tested drugs"
      subTitle="Last 7 days"
      total={totalNum}
      rate={totalRate}
    >
      <BarChart data={tests} responsive className={styles.chart}>
        <Bar
          dataKey={(t) => t.ready / t.total}
          fill="var(--chart-color-1)"
          radius={10}
          barSize={6}
          background={{ fill: 'var(--background-muted)', radius: 10 }}
        />
        <Tooltip
          labelFormatter={(label, payload) => {
            const test = payload[0].payload;
            return test.date ?? label;
          }}
          formatter={(value, name, props) => {
            const test = props.payload;
            if (!test) return [value, name];
            return [test.ready, 'Completed'];
          }}
        />
      </BarChart>
      <Legend values={legendValues} />
    </ChartCard>
  );
}
