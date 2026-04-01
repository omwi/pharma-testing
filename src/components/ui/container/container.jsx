import clsx from 'clsx';

import * as styles from './container.module.css';

export default function Container({ children, className }) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
