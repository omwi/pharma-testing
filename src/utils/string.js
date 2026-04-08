const rateFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1,
});

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
});

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const numberFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
});

export function rateToStr(rate) {
  if (typeof rate !== 'number') return null;
  return rateFormatter.format(rate);
}

export function dateToShort(date) {
  return shortDateFormatter.format(new Date(date));
}

export function dateToStr(date) {
  return dateFormatter.format(new Date(date));
}

export function shortenNumber(number) {
  return numberFormatter.format(number);
}
