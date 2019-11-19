# 快照 snapshot

```js
test('测试快照 snapshow ', () => {
  /**
   * 会生成一个快照
   */
  expect({ a: 1 }).toMatchSnapshot();
});
```

# 更新快照
如果快照发生改变时,需要` update `的话,在` cli `界面可以使用` u `更新全部不通过快照,` i `是每一个一个快照去更新.

# 行内快照
在安装了` prettier `插件后
```js
test('测试快照 snapshow ', () => {
  /**
   * 会生成一个快照
   */
  expect({ a: 1 }).toMatchInlineSnapshot();
});
```