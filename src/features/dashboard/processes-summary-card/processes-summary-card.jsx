import { Label, Pie, PieChart, Tooltip } from 'recharts';

import ChartCard from '@/components/ui/chart-card/chart-card';
import { rateToStr, shortenNumber } from '@/utils/string';

import * as styles from './processes-summary-card.module.css';

const stats = [
  {
    date: '2026-06-01',
    total: 10,
    preclinical: 5,
    clinical: 4,
    regulatory: 1,
  },
  {
    date: '2026-06-02',
    total: 12,
    preclinical: 6,
    clinical: 4,
    regulatory: 2,
  },
  {
    date: '2026-06-03',
    total: 8,
    preclinical: 3,
    clinical: 3,
    regulatory: 2,
  },
  {
    date: '2026-06-04',
    total: 15,
    preclinical: 7,
    clinical: 5,
    regulatory: 3,
  },
  {
    date: '2026-06-05',
    total: 11,
    preclinical: 4,
    clinical: 5,
    regulatory: 2,
  },
  {
    date: '2026-06-06',
    total: 9,
    preclinical: 4,
    clinical: 3,
    regulatory: 2,
  },
  {
    date: '2026-06-07',
    total: 13,
    preclinical: 5,
    clinical: 6,
    regulatory: 2,
  },
];

export default function ProcessesSummaryCard() {
  const sum = stats.reduce(
    (acc, i) => ({
      total: acc.total + i.total,
      preclinical: acc.preclinical + i.preclinical,
      clinical: acc.clinical + i.clinical,
      regulatory: acc.regulatory + i.regulatory,
    }),
    {
      total: 0,
      preclinical: 0,
      clinical: 0,
      regulatory: 0,
    },
  );

  const data = [
    {
      name: 'Preclinical testing',
      value: sum.preclinical / sum.total,
      fill: 'var(--chart-color-1)',
    },
    {
      name: 'Clinical testing',
      value: sum.clinical / sum.total,
      fill: 'var(--chart-color-2)',
    },
    {
      name: 'Regulatory testing',
      value: sum.regulatory / sum.total,
      fill: 'var(--chart-color-3)',
    },
  ];

  const labelValue = rateToStr(Math.max(...data.map((i) => i.value)));

  return (
    <ChartCard title="Testing process" subTitle="Last 7 days">
      <PieChart responsive className={styles.chart}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
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
            value={labelValue}
            style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              fill: 'var(--primary)',
            }}
          />
          <Tooltip formatter={rateToStr} />
        </Pie>
      </PieChart>
    </ChartCard>
  );
}
