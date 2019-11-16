import Counter from './counter';

let counter;

describe('默认的最外层有的分组', () => {});

beforeEach(() => {
  console.log('每个 test 执行之前');
  counter = new Counter();
});

afterEach(() => {
  console.log('每个 test 执行完成后');
})

beforeAll(() => {
  console.log('全部 test 执行之前执行的钩子');
});

afterAll(() => {
  console.log('全部 test 执行完成后执行的钩子');
});

describe('增加相关的代码', () => {
  test('测试 addOne 方法', () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });

  test('测试 minusOne 方法', () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });

});

describe('减少相关的代码', () => {
  test('测试 addTwo 方法', () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });

  test('测试 minusTwo 方法', () => {
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });
})
