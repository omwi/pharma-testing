/**
 * Converts rate to string representation
 * @param {number} rate
 */
export function rateToStr(rate) {
  if (typeof rate !== 'number') return null;
  const percent = (rate * 100).toFixed(2);
  return `${rate > 0 ? '+' : ''}${percent}%`;
}
