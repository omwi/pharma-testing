import Button from '../button/button';
import * as styles from './pagination.module.css';

export default function Pagination({ current, total, onClick }) {
  return (
    <div className={styles.container}>
      <Button
        disabled={current === 1}
        onClick={() => onClick(current - 1)}
        variant={'transparent'}
      >
        Previous
      </Button>
      <span>
        Page {current} of {total}
      </span>
      <Button
        disabled={current === total}
        onClick={() => onClick(current + 1)}
        variant={'transparent'}
      >
        Next
      </Button>
    </div>
  );
}
