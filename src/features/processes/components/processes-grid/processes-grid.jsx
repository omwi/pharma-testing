import { useProcesses } from '../../hooks/useProcesses';
import ProcessesGridItem from '../processes-grid-item/processes-grid-item';
import * as styles from './processes-grid.module.css';

export default function ProcessesGrid() {
  const { data, isLoading, isFetching, isUninitialized } = useProcesses();

  if (isLoading || isFetching || isUninitialized) return null;

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <ProcessesGridItem key={item.id} {...item} />
      ))}
    </div>
  );
}
