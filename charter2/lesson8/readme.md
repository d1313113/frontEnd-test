# jest 中的 mock
1. 捕获函数的调用和返回结构,以及` this `调用顺序
2. 它可以让我们自由的设置返回结果
3. 改变函数的内部实现


## mock 函数执行

mock.js
```js
export function runCallback(callback) {
  callback && callback();
}
```

mock.test.js
```js
import { runCallback } from './mock.js;

test('测试 jest 中的 mock', () => {
  const mockFn = jest.fn();
  // const mockFn = jest.fn(() => 'abc'); // 也可以通过这种方式修改函数的内部实现

  /**
   * 执行 jest 提供的 mockfn 可以对函数是否执行做一些断言
   * 1. 是否执行的断言
   * 2. 执行返回值的断言
   * 3. 函数调用顺序
   * 4. 函数执行时的 this
   * {
   *   calls: [[], []], // 每次调用的参数
   *   instances: [], // 每次调用的 this 指向
   *   invocationCallOrder: [1], // 函数多次调用的调用先后顺序
   *   results: [{ type: 'returns', value: undefined }] // 返回值数组
   * }
   */

  // mock 一次函数返回值
  fn.mockReturnValueOnce('aaa');
  // mock 多次函数返回值
  fn.mockReturnValue('ccc');
  runCallback(mockFn);

  // mock 函数执行的次数
  expect(fn.mock.calls.length).toBe(2);
  // mock 函数执行的参数断言
  expect(fn.calls[0]).toEqual(['123']);
  // mock 函数执行结果断言
  expect(fn.results[0].value).toBe('aaa');
  // expect(fn).toBeCalledWith('abc'); // 调用时的参数断言
});
```

## mock 异步

mockAjax.js
```js
import axios from 'axios';
export function mockAjax() {
  return axios.get('/api').then(res => res.data);
}
```

mockAjax.test.js
```js
import { mockAjax } from './mockAjax.js';
import axios from 'axios';

// mock axios 函数
jest.mock('axios');

test('mock 异步请求', async () => {
  axios.get.mockResolvedValue({ data: 'hello' });

  await mockAjax().then(res => {
    expect(res).toBe('hello');
  });
});
```