import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';

import MutedText from '@/components/ui/muted-text/muted-text';
import Select from '@/components/ui/select/select';

import * as styles from './tests-chart.module.css';

const stats = [
  { date: '2026-06-01T00:00:00Z', total: 8, target: 20 },
  { date: '2026-06-02T00:00:00Z', total: 5, target: 20 },
  { date: '2026-06-03T00:00:00Z', total: 12, target: 25 },
  { date: '2026-06-04T00:00:00Z', total: 22, target: 30 },
  { date: '2026-06-05T00:00:00Z', total: 15, target: 22 },
  { date: '2026-06-06T00:00:00Z', total: 9, target: 15 },
  { date: '2026-06-07T00:00:00Z', total: 18, target: 28 },
  { date: '2026-06-08T00:00:00Z', total: 20, target: 26 },
  { date: '2026-06-09T00:00:00Z', total: 11, target: 17 },
  { date: '2026-06-10T00:00:00Z', total: 25, target: 30 },
  { date: '2026-06-11T00:00:00Z', total: 7, target: 15 },
  { date: '2026-06-12T00:00:00Z', total: 14, target: 24 },
  { date: '2026-06-13T00:00:00Z', total: 16, target: 22 },
  { date: '2026-06-14T00:00:00Z', total: 23, target: 29 },
  { date: '2026-06-15T00:00:00Z', total: 10, target: 18 },
  { date: '2026-06-16T00:00:00Z', total: 19, target: 27 },
  { date: '2026-06-17T00:00:00Z', total: 6, target: 14 },
  { date: '2026-06-18T00:00:00Z', total: 17, target: 23 },
  { date: '2026-06-19T00:00:00Z', total: 13, target: 21 },
  { date: '2026-06-20T00:00:00Z', total: 26, target: 30 },
  { date: '2026-06-21T00:00:00Z', total: 9, target: 17 },
  { date: '2026-06-22T00:00:00Z', total: 5, target: 13 },
  { date: '2026-06-23T00:00:00Z', total: 21, target: 29 },
  { date: '2026-06-24T00:00:00Z', total: 18, target: 24 },
  { date: '2026-06-25T00:00:00Z', total: 24, target: 30 },
  { date: '2026-06-26T00:00:00Z', total: 11, target: 19 },
  { date: '2026-06-27T00:00:00Z', total: 15, target: 25 },
  { date: '2026-06-28T00:00:00Z', total: 12, target: 20 },
  { date: '2026-06-29T00:00:00Z', total: 28, target: 30 },
  { date: '2026-06-30T00:00:00Z', total: 20, target: 28 },
];

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
});

export default function TestsChart() {
  const data = stats.map((d) => ({
    ...d,
    date: dateFormatter.format(new Date(d.date)),
  }));

  const ticks = [
    data[0].date,
    data[Math.floor((data.length - 1) / 2)].date,
    data[data.length - 1].date,
  ];

  return (
    <article className={styles.chartContainer}>
      <header className={styles.chartHeader}>
        <div className={styles.chartTitle}>
          <h2>Total Tests</h2>
          <MutedText>Testing results received in all areas</MutedText>
        </div>
        <Select options={['May 2026', 'June 2026', 'July 2026']} />
      </header>

      <LineChart data={data} responsive className={styles.chart}>
        <CartesianGrid horizontal={false} syncWithTicks />
        <XAxis dataKey="date" interval="preserveStartEnd" ticks={ticks} />

        <Line
          dataKey="target"
          name="Target"
          dot={false}
          stroke="var(--chart-color-1)"
          strokeWidth={2}
          connectNulls
        />

        <Line
          dataKey="total"
          name="Actual"
          dot={false}
          stroke="var(--chart-color-2)"
          strokeDasharray="4 4"
          connectNulls
        />

        <Tooltip />
      </LineChart>

      <footer></footer>
    </article>
  );
}
