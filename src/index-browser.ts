import {
  fetchAddresses as fetchAddressesBase,
  FetchAddressesOptions,
} from './lib/fetch-addresses';
import { Address } from './lib/address';
import { browserFetcher } from './lib/default-fetchers/browser-fetcher';

export function fetchAddresses(
  postalCode: string,
  options: FetchAddressesOptions = {}
): Promise<Address[]> {
  return fetchAddressesBase(postalCode, {
    fetcher: browserFetcher,
    ...options,
  });
}

export { Address } from './lib/address';
export { Fetcher, FetcherContext } from './lib/fetcher';
