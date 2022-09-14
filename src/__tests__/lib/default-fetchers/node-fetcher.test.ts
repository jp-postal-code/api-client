import { expect, test } from '@jest/globals';
import { nodeFetcher } from '../../../lib/default-fetchers/node-fetcher';

test('throws abort error', async () => {
  const abortController = new AbortController();

  const promise = nodeFetcher(
    'https://jp-postal-code.github.io/api/100/0001.json',
    {
      postalCode: '1000001',
      signal: abortController.signal,
    }
  );

  setTimeout(() => {
    abortController.abort();
  }, 0);

  await expect(promise).rejects.toThrow('This operation was aborted');
});
