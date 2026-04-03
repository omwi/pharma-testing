import { format } from 'date-fns';

import { getFormattedTimeRange } from '@/utils/date';

const TIME_MACHINE = 'HH:mm';

/**
 * @param {{from: TZDate, to: TZDate}} param0
 * @returns
 */
export default function TimeRange({ from, to }) {
  const [fromStr, toStr] = getFormattedTimeRange(from, to);

  return (
    <>
      <time dateTime={format(from, TIME_MACHINE)}>{fromStr}</time> &ndash;{' '}
      <time dateTime={format(to, TIME_MACHINE)}>{toStr}</time>
    </>
  );
}
