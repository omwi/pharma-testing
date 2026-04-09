import { useNavigate } from 'react-router';

import Pagination from '@/components/ui/pagination/pagination';
import ProgressBar from '@/components/ui/progress-bar/progress-bar';
import StatusIcon from '@/components/ui/status-icon/status-icon';
import { usePagination } from '@/hooks/usePagination';
import { dateToStr } from '@/utils/string';

import { useProcesses } from '../../hooks/useProcesses';
import StatusBars from '../status-bars/status-bars';
import * as styles from './processes-table.module.css';

export default function ProcessesTable() {
  const { data } = useProcesses();

  const ITEMS_PER_PAGE = 10;
  const { pageItems, total, page, setPage } = usePagination(
    data ?? [],
    ITEMS_PER_PAGE,
  );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHead />
        <TableBody items={pageItems} />
      </table>
      <Pagination current={page} total={total} onClick={setPage} />
    </div>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th>NAME</th>
        <th>LOCATION</th>
        <th>START DATE</th>
        <th>END DATE</th>
        <th>SUCCESS</th>
        <th>PROCESS</th>
        <th>STATUS</th>
      </tr>
    </thead>
  );
}

function TableBody({ items }) {
  return (
    <tbody>
      {items.map((item) => (
        <TableRow key={item.id} {...item} />
      ))}
    </tbody>
  );
}

function TableRow({
  id,
  name,
  location,
  startDate,
  endDate,
  isSuccess,
  process,
  status,
}) {
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/processes/${id}`)}>
      <td className={styles.name}>
        {name} #{id}
      </td>
      <td>{location}</td>
      <td>{dateToStr(startDate)}</td>
      <td>{dateToStr(endDate)}</td>
      <td>
        <StatusIcon isSuccess={isSuccess} />
      </td>
      <td className={styles.progress}>
        <ProgressBar current={process[0]} total={process[1]} maxWidth={100} />
      </td>
      <td className={styles.status}>
        <StatusBars status={status} />
      </td>
    </tr>
  );
}
