import Pagination from '@/components/ui/pagination/pagination';
import { usePagination } from '@/hooks/usePagination';

import { useProcesses } from '../../hooks/useProcesses';
import ProcessesGridItem from '../processes-grid-item/processes-grid-item';
import * as styles from './processes-grid.module.css';

export default function ProcessesGrid() {
  const { data, isLoading, isFetching, isUninitialized } = useProcesses();

  if (isLoading || isFetching || isUninitialized) return null;

  const ITEMS_PER_PAGE = 8;
  const { pageItems, total, page, setPage } = usePagination(
    data,
    ITEMS_PER_PAGE,
  );

  return (
    <div className={styles.container}>
      <div>
        {pageItems.map((item) => (
          <ProcessesGridItem key={item.id} {...item} />
        ))}
      </div>
      <Pagination current={page} total={total} onClick={setPage} />
    </div>
  );
}
