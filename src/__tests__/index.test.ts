import { expect, test } from '@jest/globals';
import { fetchAddresses } from '../index';

test('fetch addresses', async () => {
  await expect(fetchAddresses('1000001')).resolves.toEqual([
    {
      postalCode: '1000001',
      regionId: 13,
      region: '東京都',
      locality: '千代田区',
      address1: '千代田',
      address2: '',
      regionKana: 'トウキョウト',
      localityKana: 'チヨダク',
      address1Kana: 'チヨダ',
      address2Kana: '',
    },
  ]);
});

test('throws Cannot fetch address error', async () => {
  await expect(fetchAddresses('0000000')).rejects.toThrow(
    'Cannot fetch addresses: Not Found'
  );
});
