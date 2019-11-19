import { fetchData1, fetchData2, fetchData3 } from './fetchData';

/**
 * 异步情况下,异步函数中的回调函数并不能执行到
 */
test('fetchData res is { success: true }1', () => {
  fetchData1((data) => {
    expect(data).toEqual({
      success: true
    });
  });
});

/**
 * 通过添加 done 参数,挂起测试,直到结束
 */
test('fetchData res is { success: true }2', (done) => {
  fetchData1((data) => {
    expect(data).toEqual({
      success: true
    });
    done();
  });
});

/**
 * 返回 Promise 类型的异步测试用例写法,需要显式 return
 */
test('返回Promise类型的异步类型', () => {
  return fetchData2().then(res => {
    expect(res.data).toEqual({ success: true });
  });
});

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

/**
 * 测试返回 Promise 类型 catch 情况的测试方法2
 */
test('测试返回 Promise 类型 catch 情况的测试方法2', () => {
  return expect(fetchData3()).rejects.toThrow();
});

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

/**
 * 测试返回 Promise 类型 catch 情况的测试方法3
 */
test('测试返回 Promise 类型 catch 情况的测试方法3', async () => {
  await expect(fetchData3()).rejects.toThrow();
});

/**
 * 返回 Promise 类型的异步测试用例写法,可以利用 resolves 以及 toMatchObject 方法匹配整个 response 对象
 */
test('返回Promise类型的异步类型', async () => {
  const { data } = await fetchData2();
  expect(data).toEqual({ success: true });
});

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