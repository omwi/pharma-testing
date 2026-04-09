import { Link, NavLink } from 'react-router';

import Card from '@/components/ui/card/card';
import Divider from '@/components/ui/divider/divider';
import ProgressBar from '@/components/ui/progress-bar/progress-bar';
import StatusIcon from '@/components/ui/status-icon/status-icon';
import { getFormattedDateRange } from '@/utils/date';

import StatusBars from '../status-bars/status-bars';
import * as styles from './processes-grid-item.module.css';

export default function ProcessesGridItem({
  id,
  name,
  location,
  startDate,
  endDate,
  isSuccess,
  process,
  status,
}) {
  const [fromStr, toStr] = getFormattedDateRange(
    new Date(startDate),
    new Date(endDate),
  );

  return (
    <Link to={`/processes/${id}`} className={styles.link}>
      <Card className={styles.card}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            <span>{name}</span> <span className={styles.id}>#{id}</span>
          </h2>
          <StatusIcon isSuccess={isSuccess} />
        </header>

        <Divider />

        <div className={styles.content}>
          <p>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>{location}</span>
          </p>
          <p>
            <span className={styles.label}>Start</span>
            <span className={styles.value}>{fromStr}</span>
          </p>
          <p>
            <span className={styles.label}>End</span>
            <span className={styles.value}>{toStr}</span>
          </p>
        </div>

        <footer className={styles.footer}>
          <ProgressBar
            current={process[0]}
            total={process[1]}
            className={styles.grow}
            withText={false}
          />
          <StatusBars status={status} />
        </footer>
      </Card>
    </Link>
  );
}
