import clsx from 'clsx';

import * as styles from './divider.module.css';

export default function Divider({
  orientation = 'horizontal',
  isPartial = false,
  isResponsive = false,
}) {
  const classes = clsx(styles.divider, {
    [styles.horizontal]: orientation === 'horizontal',
    [styles.vertical]: orientation === 'vertical',
    [styles.partial]: isPartial,
    [styles.isResponsive]: isResponsive,
  });
  const containerClasses = clsx(styles.container, {
    [styles.horizontalContainer]: orientation === 'horizontal',
    [styles.verticalContainer]: orientation === 'vertical',
    [styles.isResponsive]: isResponsive,
  });
  return (
    <div className={containerClasses}>
      <div className={classes} />
    </div>
  );
}
