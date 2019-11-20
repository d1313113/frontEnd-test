# timer 的 mock

## 基础mock

timer.js
```js
export function timer1(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}
```

timer.test.js
```js
import { timer1 } from './timer';

// 使用 jest 提供的 mock 定时器
jest.useFakeTimers();

test('测试 timer1', () => {
  const fn = jest.fn();

  timer1(fn);
  // 通过这个api直接执行所有的定时
  jest.runAllTimers();
  expect(fn).toHaveBeenCalledTimes(1);
});
```

## 定时器嵌套

timer.js
```js
export function timer1(callback) {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      callback();
    }, 3000);
  }, 3000);
}
```

timer.test.js
```js
import { timer1 } from './timer';

// 使用 jest 提供的 mock 定时器
jest.useFakeTimers();

test('测试 timer1', () => {
  const fn = jest.fn();

  timer1(fn);
  // 通过这个 api 执行处在队列中的定时器,因此只会执行外层的,内层的暂时还未在定时器中
  jest.runOnlyPendingTimers();
  expect(fn).toHaveBeenCalledTimes(1);
});
```

## 加速定时器执行

timer.js
```js
export function timer1(callback) {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      callback();
    }, 3000);
  }, 3000);
}
```

timer.test.js
```js
import { timer1 } from './timer';

beforeEach(() => {
  // 使用 jest 提供的 mock 定时器,因为加速定时器可能会导致多个测试用例之间相互影响,所以可以每次执行测试用例前重置
  jest.useFakeTimers();
});

test('测试 timer1', () => {
  const fn = jest.fn();

  timer1(fn);
  // 通过这个 api 加速定时器执行,可以多次调用,传入加速的毫秒数
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
});
```
