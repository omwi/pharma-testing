const rateFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1,
});

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
});

const numberFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
});

/**
 * Converts rate to string representation
 * @param {number} rate
 */
export function rateToStr(rate) {
  if (typeof rate !== 'number') return null;
  return rateFormatter.format(rate);
}

export function dateToShort(date) {
  return dateFormatter.format(new Date(date));
}

export function shortenNumber(number) {
  return numberFormatter.format(number);
}
