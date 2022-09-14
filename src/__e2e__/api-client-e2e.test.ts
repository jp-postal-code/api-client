import { beforeAll, expect, test } from '@jest/globals';
import { spawnSync } from 'child_process';
import { rm } from 'fs/promises';
import { join } from 'path';

const projectRoots = {
  esm: join(process.cwd(), 'src/__e2e__/fixtures/esm'),
  cjs: join(process.cwd(), 'src/__e2e__/fixtures/cjs'),
};

beforeAll(async () => {
  for (const projectRoot of Object.values(projectRoots)) {
    // node_modules を削除
    await rm(join(projectRoot, 'node_modules'), {
      force: true,
      recursive: true,
    });

    // インストール
    const { status } = spawnSync('yarn', {
      cwd: projectRoot,
      stdio: 'ignore',
    });
    expect(status).toBe(0);
  }
});

test.each(['esm', 'cjs'] as const)('fetch addresses: type=%s', async (type) => {
  const projectRoot = projectRoots[type];

  const { status, output } = spawnSync('node', ['main.js'], {
    cwd: projectRoot,
    encoding: 'utf-8',
  });

  expect(output.join('')).toBe(`[
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
    address2Kana: ''
  }
]
`);
  expect(status).toBe(0);
});
