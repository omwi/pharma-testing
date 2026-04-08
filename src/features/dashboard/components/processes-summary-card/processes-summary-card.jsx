import { Label, Pie, PieChart, Tooltip } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';
import Legend from '@/components/ui/legend/legend';
import { rateToStr } from '@/utils/string';

import { useProcessesSummary } from '../../hooks/useProcessesSummary';
import * as styles from './processes-summary-card.module.css';

export default function ProcessesSummaryCard() {
  const { data, isLoading, isFetching, isUninitialized } =
    useProcessesSummary();

  if (isLoading || isFetching || isUninitialized) return null;

  const values = [
    {
      name: 'Preclinical testing',
      percent: data.preclinicalPercent,
      fill: 'var(--chart-color-1)',
    },
    {
      name: 'Clinical testing',
      percent: data.clinicalPercent,
      fill: 'var(--chart-color-2)',
    },
    {
      name: 'Regulatory testing',
      percent: data.regulatoryPercent,
      fill: 'var(--chart-color-3)',
    },
  ];
  const maxPercent = Math.max(...values.map((i) => i.percent));

  return (
    <ChartCard title="Testing process" subTitle="Last 7 days">
      <PieChart responsive className={styles.chart}>
        <Pie
          data={values}
          dataKey={(v) => v.percent}
          nameKey={(v) => v.name}
          cx="50%"
          cy="50%"
          innerRadius={73}
          outerRadius={80}
          paddingAngle={4}
          startAngle={90}
          endAngle={-270}
        >
          <Label
            position="center"
            value={rateToStr(maxPercent)}
            style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              fill: 'var(--primary)',
            }}
          />
          <Tooltip formatter={rateToStr} />
        </Pie>
      </PieChart>
      <Legend values={values} />
    </ChartCard>
  );
}
