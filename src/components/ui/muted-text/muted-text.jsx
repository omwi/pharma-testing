import * as styles from './muted-text.module.css';

export default function MutedText({ children, as: Component = 'p' }) {
  return <Component className={styles.muted}>{children}</Component>;
}
