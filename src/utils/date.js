import { TZDate, tzName } from '@date-fns/tz';
import { format } from 'date-fns';

const DATE = 'do';
const DATE_WITH_MONTH = 'do MMMM';
const DATE_WITH_YEAR = 'do MMMM yyyy';

const TIME = 'h aaa';

export const TIME_ZONE = 'America/New_York';

/**
 * Returns formatted date range depending on the differences between dates
 * @param {TZDate} from
 * @param {TZDate} to
 * @returns {[string, string]}
 */
function getFormattedDateRange(from, to) {
  if (from.getFullYear() !== to.getFullYear()) {
    return [format(from, DATE_WITH_YEAR), format(to, DATE_WITH_YEAR)];
  }

  if (from.getMonth() !== to.getMonth()) {
    return [format(from, DATE_WITH_MONTH), format(to, DATE_WITH_YEAR)];
  }

  return [format(from, DATE), format(to, DATE_WITH_YEAR)];
}

/**
 * Returns formatted time range depending on the differences between dates
 * @param {TZDate} from
 * @param {TZDate} to
 * @returns {[string, string]}
 */
function getFormattedTimeRange(from, to) {
  return [format(from, TIME), `${format(to, TIME)} ${tzName(to.timeZone, to)}`];
}

export { getFormattedDateRange, getFormattedTimeRange };
