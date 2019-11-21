# dom 测试

` jest `在` node `环境下实现了一套` dom api `,所以可以直接使用` jest `对` dom `进行断言测试


mockDom.js
```js
import $ from 'jquery';

export default function addDivToBody() {
  $('body').append('<div/>');
};
```

mockDom.test.js
```js
import $ from 'jquery';
import addDivToBody from './mockDom';

// jest 在 node 环境中实现了一套 dom 的语法,称为 jsDom ,所以可以在 node 环境中直接使用 dom api
test('测试 addDivToBody', () => {
  addDivToBody();
  expect($('body').find('div').length).toBe(1);
  addDivToBody();
  expect($('body').find('div').length).toBe(2);
});
```