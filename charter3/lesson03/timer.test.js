import { timer1, timer2 } from './timer';

// mock 定时器
jest.useFakeTimers();

test('timer1 测试', () => {
  // 通过 mock 函数来模拟 callback 被调用
  const fn = jest.fn();
  timer1(fn);
  // 执行运行定时器,避免等待
  jest.runAllTimers();
  expect(fn).toHaveBeenCalledTimes(1);
});

test('测试 timer2 嵌套调用', () => {
  const fn = jest.fn();
  timer2(fn);
  // 只执行正在队列中的定时器
  jest.runOnlyPendingTimers();
  expect(fn).toHaveBeenCalledTimes(1);
});

test('测试 timer2 嵌套调用', () => {
  const fn = jest.fn();
  timer2(fn);
  // 快进时间,传入毫秒数
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
});
