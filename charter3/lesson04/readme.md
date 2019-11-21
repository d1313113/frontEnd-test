# mock ES6 class
有时由于写的` class `逻辑比较复杂,测试起来需要的时间比较多,因此可以采用` mock `的方式来进行测试是否执行.

utils.js
```js
class Utils {
  // 逻辑多,繁琐
  a() {}
  // 逻辑多,繁琐
  b() {}
}
export default Utils;
```

自身的逻辑在自身测试
utils.test.js
```js
import Utils from './utils';
```

demo.js
```js
import Utils from './utils';

export function demoFn() {
  const utils = new Utils();
  // 需要测试 a, b是否执行,可以采用 mock 的方式去测试
  utils.a();
  utils.b();
}
```

使用工具类,节省时间,采用` mock `方式
demo.test.js
```js
import { demoFn } from './demo';
import Utils from './utils;

// 在这里 mock 逻辑复杂执行耗时的 Utils class
jest.mock('./utils');

test('测试 demoFn', () => {
  demoFn();
  // 这里对 mock 后的 Utils 进行断言即可
  expect(Utils).toHaveBeenCalled();
  // 针对 new 后的 class mock 对象的 this 指向后的进行断言测试
  expect(Utils.mock.instances[0].a).toHaveBeenCalled();
  expect(Utils.mock.instances[0].b).toHaveBeenCalled();
});

```