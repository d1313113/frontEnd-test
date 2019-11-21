import Util from './utils';

let utils = null;

beforeEach(() => {
  utils = new Util();
});

// 类的测试独立在 utils 中测
test('测试 a 方法', () => {
  utils.a();
  expect();
});

test('测试 b 方法', () => {
  utils.b();
  expect();
});