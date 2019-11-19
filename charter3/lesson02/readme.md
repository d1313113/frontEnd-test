# mock
在需要进行测试的文件同层级新建一个` __mocks__ `文件夹,在里面新增同名的` js `文件.

__mocks__/demo.js
```js
export function mockAjax() {
  return new Promise((resolve, reject) => {
    resolve('123');
  });
}
```

demo.js
```js
import axios from 'axios';

export function mockAjax() {
  return axios.get('/api').then(res => res.data);
}
```

demo.test.js
```js
// 这里会去 mock __mocks__ 文件夹中的内容来取代真实的 demo.js 中的内容
jest.mock('./demo');
import { mockAjax } from './dome';


// 解除 mock
jest.unmock('./demo);

test('测试 mockAjax', async () => {
  await expect(mockAjax()).resolves.toBe('123');
});
```

# 使用 __mocks__ 后获取真实的内容

demo.test.js
```js
jest.mock('./mock');
import { mockAjax } from './demo';
// 这里就是从真实文件从引入
const { getNum } = jest.requireActual('./demo');

test('测试 getNum', () => {
  expect(getNum()).toBe(1);
});
```

# 配置 jest.config.js
通过配置` jest.config.js `中的` automock `为` true `时候,可以直接开启自动` mock `,模块会自动去引入` __mocks__ `中的内容来替代真实的内容.