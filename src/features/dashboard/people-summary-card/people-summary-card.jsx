import { Pie, PieChart, Tooltip } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';
import Legend from '@/components/ui/legend/legend';
import { shortenNumber } from '@/utils/string';

import * as styles from './people-summary-card.module.css';

export default function PeopleSummaryCard() {
  const stats = {
    tested: 30,
    target: 100,
  };

  const data = [
    { name: 'Tested', value: stats.tested, fill: 'var(--chart-color-1)' },
    {
      name: 'Non tested',
      value: stats.target - stats.tested,
      fill: 'var(--background-muted)',
    },
  ];

  const legendData = data.map((i) => ({
    name: i.name,
    percent: i.value / stats.target,
    fill: i.fill,
  }));

  return (
    <ChartCard title="Number of people tested" subTitle="Last 7 days">
      <PieChart responsive className={styles.chart}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
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
            formatter={shortenNumber}
            itemStyle={{ color: 'var(--primary' }}
          />
        </Pie>
      </PieChart>

      <Legend data={legendData} />
    </ChartCard>
  );
}
