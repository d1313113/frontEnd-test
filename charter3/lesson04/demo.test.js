import { demoFn } from './demo';
import Util from './utils';
jest.mock('./utils');

test('测试 demoFn', () => {
  demoFn();
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
});
