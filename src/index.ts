import {
  fetchAddresses as fetchAddressesBase,
  FetchAddressesOptions,
} from './lib/fetch-addresses';
import { Address } from './lib/address';
import { nodeFetcher } from './lib/default-fetchers/node-fetcher';

export function fetchAddresses(
  postalCode: string,
  options: FetchAddressesOptions = {}
): Promise<Address[]> {
  return fetchAddressesBase(postalCode, {
    fetcher: nodeFetcher,
    ...options,
  });
}

export { Address } from './lib/address';
export { Fetcher, FetcherContext } from './lib/fetcher';
