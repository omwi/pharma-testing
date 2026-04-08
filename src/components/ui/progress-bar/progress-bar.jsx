import clsx from 'clsx';

import { rateToStr } from '@/utils/string';

import * as styles from './progress-bar.module.css';

export default function ProgressBar({
  current,
  total,
  maxWidth,
  className,
  withText = true,
}) {
  return (
    <div className={clsx(className)}>
      {withText && (
        <span className={styles.progressText}>
          {current} / {total}
        </span>
      )}
      <div
        className={styles.progressBar}
        style={maxWidth ? { '--width': `${parseInt(maxWidth)}px` } : null}
      >
        <div
          className={styles.progressFill}
          style={{
            width: rateToStr(current / total),
          }}
        ></div>
      </div>
    </div>
  );
}
