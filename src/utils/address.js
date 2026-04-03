/**
 * @param {{street: string, city: string, state: string}} address
 * @returns {string}
 */
export function addressToString(address) {
  return [address.street, address.city, address.state]
    .filter((item) => item && item.length > 0)
    .join(', ');
}
