import { format } from 'date-fns';

import { getFormattedDateRange } from '@/utils/date';

const DATE_MACHINE = 'yyyy-MM-dd';

export default function DateRange({ from, to, className }) {
  const [fromStr, toStr] = getFormattedDateRange(from, to);

  return (
    <span className={className}>
      <time dateTime={format(from, DATE_MACHINE)}>{fromStr}</time> &ndash;{' '}
      <time dateTime={format(to, DATE_MACHINE)}>{toStr}</time>
    </span>
  );
}
