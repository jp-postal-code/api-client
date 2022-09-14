import { expect, test } from '@jest/globals';
import { getAddressesJsonUrl } from '../../lib/get-addresses-json-url';

test('returns url', () => {
  expect(getAddressesJsonUrl('1000001')).toBe(
    'https://jp-postal-code.github.io/api/100/0001.json'
  );
});
