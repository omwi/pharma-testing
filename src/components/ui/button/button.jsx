import clsx from 'clsx';

import * as styles from './button.module.css';

export default function Button({
  children,
  className,
  variant,
  onClick,
  disabled,
}) {
  const classes = clsx(styles.button, className, {
    [styles.secondary]: variant === 'secondary',
    [styles.transparent]: variant === 'transparent',
  });
  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
