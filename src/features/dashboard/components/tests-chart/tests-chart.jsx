import clsx from 'clsx';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';

import MutedText from '@/components/ui/muted-text/muted-text';
import Select from '@/components/ui/select/select';
import { dateToShort } from '@/utils/string';

import useTestsData from '../../hooks/useTestsData';
import * as styles from './tests-chart.module.css';

export default function TestsChart({ className }) {
  const { data, isLoading, isFetching, isUninitialized } = useTestsData();

  if (isLoading || isFetching || isUninitialized) return null;

  const ticks = [
    data[0].date,
    data[Math.floor((data.length - 1) / 2)].date,
    data[data.length - 1].date,
  ];

  return (
    <article className={clsx(styles.chartContainer, className)}>
      <header className={styles.chartHeader}>
        <div className={styles.chartTitle}>
          <h2>Total Tests</h2>
          <MutedText>Testing results received in all areas</MutedText>
        </div>
        <Select options={['May 2026', 'June 2026', 'July 2026']} />
      </header>

      <LineChart data={data} responsive className={styles.chart}>
        <CartesianGrid horizontal={false} syncWithTicks />
        <XAxis
          dataKey="date"
          tickFormatter={dateToShort}
          interval="preserveStartEnd"
          ticks={ticks}
        />

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
          strokeDasharray="6 6"
          connectNulls
        />

        <Tooltip />
      </LineChart>

      <footer></footer>
    </article>
  );
}
