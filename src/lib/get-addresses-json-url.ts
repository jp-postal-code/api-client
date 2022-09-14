export function getAddressesJsonUrl(postalCode: string): string {
  const topPostalCode = postalCode.substring(0, 3);
  const bottomPostalCode = postalCode.substring(3);

  return `https://jp-postal-code.github.io/api/${topPostalCode}/${bottomPostalCode}.json`;
}
