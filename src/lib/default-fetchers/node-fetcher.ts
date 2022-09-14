import { Fetcher } from '../fetcher';
import { get } from 'https';
import { IncomingMessage } from 'http';

export const nodeFetcher: Fetcher = (url, { signal }) => {
  return new Promise((resolve, reject) => {
    let _res: IncomingMessage | undefined;

    const req = get(url, (res) => {
      _res = res;
      res.setEncoding('utf-8');

      let body = '';

      res.on('error', reject);
      res.on('data', (chunk: string) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(body));
      });

      if (res.statusCode !== 200) {
        res.destroy(new Error(`Cannot fetch addresses: ${res.statusMessage}`));
      }
    });

    req.on('error', reject);

    signal?.addEventListener('abort', () => {
      _res?.destroy(signal.reason);
      req.destroy(signal.reason);
    });
  });
};
