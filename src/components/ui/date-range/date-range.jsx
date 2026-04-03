import { TZDate } from '@date-fns/tz';
import { format } from 'date-fns';

import { getFormattedDateRange } from '@/utils/date';

const DATE_MACHINE = 'yyyy-MM-dd';

/**
 * @param {{from: TZDate, to: TZDate}} param0
 * @returns
 */
export default function DateRange({ from, to }) {
  const [fromStr, toStr] = getFormattedDateRange(from, to);

  return (
    <>
      <time dateTime={format(from, DATE_MACHINE)}>{fromStr}</time> &ndash;{' '}
      <time dateTime={format(to, DATE_MACHINE)}>{toStr}</time>
    </>
  );
}
