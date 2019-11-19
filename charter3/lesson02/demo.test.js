jest.mock('./demo');
import { getData } from './demo';
// 从真实的文件中引入
const { getNum } = jest.requireActual('./demo');

// 取消mock
// jest.unmock('./demo');

test('测试 mock ajax', async () => {
  await expect(getData()).resolves.toBe('123');
});

test('测试 getNum', () => {
  expect(getNum()).toBe(1);
});
