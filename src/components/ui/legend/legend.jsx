import { rateToStr } from '@/utils/string';

import * as styles from './legend.module.css';

/**
 * @param {Object} props
 * @param {{name: string, percent: number, fill: string}[]} props.values
 */
export default function Legend({ values }) {
  return (
    <ul>
      {values.map((i) => (
        <LegendItem key={i.name} {...i} />
      ))}
    </ul>
  );
}

function LegendItem({ name, percent, fill }) {
  return (
    <li className={styles.legendItem}>
      <span className={styles.legendLabel}>
        <span
          style={{ backgroundColor: fill }}
          className={styles.legendColor}
        />
        <span>{name}</span>
      </span>
      <span>{rateToStr(percent)}</span>
    </li>
  );
}
