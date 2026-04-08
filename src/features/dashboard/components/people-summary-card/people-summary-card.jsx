import { Pie, PieChart, Tooltip } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';
import Legend from '@/components/ui/legend/legend';
import { rateToStr } from '@/utils/string';

import { usePeopleSummary } from '../../hooks/usePeopleSummary';
import * as styles from './people-summary-card.module.css';

export default function PeopleSummaryCard() {
  const { data, isLoading, isFetching, isUninitialized } = usePeopleSummary();

  if (isLoading || isFetching || isUninitialized) return null;

  const values = [
    {
      name: 'Tested',
      percent: data.testedPercent,
      fill: 'var(--chart-color-1)',
    },
    {
      name: 'Non tested',
      percent: data.nonTestedPercent,
      fill: 'var(--background-muted)',
    },
  ];

  return (
    <ChartCard title="Number of people tested" subTitle="Last 7 days">
      <PieChart responsive className={styles.chart}>
        <Pie
          data={values}
          dataKey={(v) => v.percent}
          nameKey={(v) => v.name}
          cx="50%"
          cy="70%"
          innerRadius={73}
          outerRadius={80}
          paddingAngle={0}
          startAngle={180}
          endAngle={0}
          stroke="none"
        >
          <Tooltip
            formatter={rateToStr}
            itemStyle={{ color: 'var(--primary' }}
          />
        </Pie>
      </PieChart>

      <Legend values={values} />
    </ChartCard>
  );
}
