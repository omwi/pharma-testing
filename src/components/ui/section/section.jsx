import clsx from 'clsx';

import * as styles from './section.module.css';

export default function Section({ children, title, className }) {
  return (
    <section className={clsx(styles.section, className)}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
