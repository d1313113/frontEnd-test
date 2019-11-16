# 测试异步函数

## 回调类型异步测试用例
需要使用` done `参数在回调中调用

```js
test('async function callback', (done) => {
  asyncFcuntion((res) => {
    expect(res.data).toEqual({ success: true });
    // 在这里手动调用 done 来完成回调型异步测试方法
    done();
  })
})
```

## 返回 Promise 类型的异步测试
1. 方法1
```js
/**
 * 返回 Promise 类型的异步测试用例写法,需要显式 return
 */
test('返回Promise类型的异步类型', () => {
  return fetchData2().then(res => {
    expect(res.data).toEqual({ success: true });
  });
});
```

2. 方法2
```js
/**
 * 返回 Promise 类型的异步测试用例写法,可以利用 resolves 以及 toMatchObject 方法匹配整个 response 对象
 */
test('返回Promise类型的异步类型', () => {
  return expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  });
});
```

3. 方法3
```js
/**
 * 返回 Promise 类型的异步测试用例写法,可以利用 resolves 以及 toMatchObject 方法匹配整个 response 对象
 */
test('返回Promise类型的异步类型', async () => {
  await expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  });
});
```

4. 方法4
```js
/**
 * 返回 Promise 类型的异步测试用例写法,可以利用 resolves 以及 toMatchObject 方法匹配整个 response 对象
 */
test('返回Promise类型的异步类型', async () => {
  const { data } = await fetchData2();
  expect(data).toEqual({ success: true });
});
```

## 返回 Promise 类型的 catch 测试用例注意点
1. 方法1
```js
/**
 * 测试 Promise 类型的 catch 会存在坑,需要断言必须有一个 expect 被执行,
 * 否则当不执行 catch 时,测试用例也会通过
 */
test('返回 Promise 类型异步函数 catch', () => {
  // 通过断言下面至少执行一个 expect 语句来避免不走进 catch 中导致测试用例也能通过的问题
  expect.assertions(1);
  return fetchData3().catch(e => {
    expect(e.toString().indexOf('404') > -1).toBe(true);
  });
});
```

2. 方法2
```js
/**
 * 测试返回 Promise 类型 catch 情况的测试方法2
 */
test('测试返回 Promise 类型 catch 情况的测试方法2', () => {
  return expect(fetchData3()).rejects.toThrow();
});
```

3. 方法3
```js
/**
 * 测试返回 Promise 类型 catch 情况的测试方法3
 */
test('测试返回 Promise 类型 catch 情况的测试方法3', async () => {
  await expect(fetchData3()).rejects.toThrow();
});
```

4. 方法4
```js
/**
 * 测试返回 Promise 类型 catch 情况的测试方法4
 */
test('测试返回 Promise 类型 catch 情况的测试方法4', async () => {
  expect.assertions(1);
  try {
    await fetchData3();
  } catch (error) {
    expect(error.toString().indexOf('404') > -1).toBe(true);
  }
});
```
