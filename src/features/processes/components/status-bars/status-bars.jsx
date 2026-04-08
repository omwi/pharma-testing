import clsx from 'clsx';

import { rateToStr } from '@/utils/string';

import * as styles from './status-bars.module.css';

/**
 * @param {{status: [number,number,number,number]}} param0
 */
export default function StatusBars({ status }) {
  const statusClasses = [
    styles.status1,
    styles.status2,
    styles.status3,
    styles.status4,
  ];
  const total = status.reduce((acc, i) => acc + i, 0);

  return (
    <div className={styles.statusBarsContainer}>
      {status.map((val, index) => (
        <span
          key={index}
          className={clsx(statusClasses[index], styles.bar)}
          style={{ width: `${rateToStr(val / total)}` }}
        ></span>
      ))}
    </div>
  );
}
