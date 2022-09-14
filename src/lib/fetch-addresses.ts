import { Address } from './address';
import { Fetcher } from './fetcher';
import { getAddressesJsonUrl } from './get-addresses-json-url';

export interface FetchAddressesOptions {
  signal?: AbortSignal;
  fetcher?: Fetcher;
}

export async function fetchAddresses(
  postalCode: string,
  options: FetchAddressesOptions = {}
): Promise<Address[]> {
  const { fetcher, signal } = options;
  const url = getAddressesJsonUrl(postalCode);

  if (fetcher == null) {
    throw new Error('fetcher is required');
  }

  return fetcher(url, {
    postalCode,
    signal,
  }) as Promise<Address[]>;
}
