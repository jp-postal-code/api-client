import { Fetcher } from '../fetcher';

export const browserFetcher: Fetcher = async (url, { signal }) => {
  const response = await fetch(url, {
    signal: signal,
  });

  if (response.status !== 200) {
    return new Error(`Cannot fetch addresses: ${response.statusText}`);
  }

  return await response.json();
};
