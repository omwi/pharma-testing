import clsx from 'clsx';

import * as styles from './card.module.css';

export default function Card({ children, className }) {
  return <article className={clsx(styles.card, className)}>{children}</article>;
}
