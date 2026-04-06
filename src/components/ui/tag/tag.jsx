import * as styles from './tag.module.css';

export default function Tag({ text }) {
  return <span className={styles.tag}>{text}</span>;
}
