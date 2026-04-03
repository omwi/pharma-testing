import * as styles from './muted-text.module.css';

export default function MutedText({ children }) {
  return <p className={styles.muted}>{children}</p>;
}
