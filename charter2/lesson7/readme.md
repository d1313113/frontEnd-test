# jest 中的钩子函数

## describe
代码分组,可以让` test `分组,可以再分组中使用下面的钩子函数

在` describe `中,如果代码没写在钩子函数中时,会直接按照同步代码来执行,不会按照预期执行
```js
describe('描述', () => {
  console.log('如果在这里写代码,会直接执行,因此把需要使用的逻辑写到钩子函数中');
})
```

## beforeEach
每个测试用例执行之前

## afterEach
每个测试用例执行完成

## beforeAll
全部测试用例执行之前

## afterAll
全部测试用例执行之后

# 钩子函数作用域
1. 一个` describe `函数下所有的钩子函数对内部的所有` test `都起作用
2. 外部的` describe `的钩子函数早于内部的` describe `中的钩子执行

# only 修饰符
```js
test.only('整个测试文件中只会执行这个 test', () => {
  // ...
  expect();
});
```