import { format } from 'date-fns';

import { getFormattedTimeRange } from '@/utils/date';

const TIME_MACHINE = 'HH:mm';

export default function TimeRange({ from, to, className }) {
  const [fromStr, toStr] = getFormattedTimeRange(from, to);

  return (
    <span className={className}>
      <time dateTime={format(from, TIME_MACHINE)}>{fromStr}</time> &ndash;{' '}
      <time dateTime={format(to, TIME_MACHINE)}>{toStr}</time>
    </span>
  );
}
