import clsx from 'clsx';

import * as styles from './tag.module.css';

export default function Tag({ text, className }) {
  return <span className={clsx(styles.tag, className)}>{text}</span>;
}
