import clsx from 'clsx';

import * as styles from './icon-container.module.css';

export default function IconContainer({ children, size, className }) {
  return (
    <span
      className={clsx(styles.iconContainer, className)}
      style={size ? { '--size': `${parseInt(size)}px` } : null}
    >
      {children}
    </span>
  );
}
