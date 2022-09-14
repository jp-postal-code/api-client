import { expect, test } from '@jest/globals';
import { fetchAddresses } from '../../lib/fetch-addresses';

test('throws fetcher is required', async () => {
  await expect(() => fetchAddresses('1000001')).rejects.toThrow(
    'fetcher is required'
  );
});
