import { fetchAddresses } from '@jp-postal-code/api-client';

fetchAddresses('1000001').then((addresses) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const app = document.getElementById('app')!;
  app.textContent = JSON.stringify(addresses, null, 2);
});
