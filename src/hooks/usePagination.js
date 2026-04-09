import { useState } from 'react';

export function usePagination(items, itemsPerPage) {
  const total = Math.ceil(items.length / itemsPerPage);

  const [page, setPage] = useState(1);

  const pageItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return { pageItems, total, page, setPage };
}
