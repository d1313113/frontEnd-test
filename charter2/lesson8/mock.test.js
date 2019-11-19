import { runCallback, createObject, getData } from './mock';
import axios from 'axios';
jest.mock('axios');

test('测试 mock', () => {
  // 使用jest的fn,当fn被调用时,生成mock函数可以进行一些断言
  const fn = jest.fn();
  fn.mockReturnValueOnce('aaa');
  fn.mockReturnValue('ccc');

  runCallback(fn);
  runCallback(fn);
  // 被调用次数
  expect(fn.mock.calls.length).toBe(2);
  // 返回值
  expect(fn.mock.results[0].value).toBe('aaa');
  expect(fn.mock.results[1].value).toBe('ccc');
});

test('实例 mock this', () => {
  const fn = jest.fn();

  createObject(fn);
  // console.log(fn.mock.instances[0]);
  // expect(fn.mock.instances[0]).toEqual(fn.mock);
});

test('测试 getData', async () => {
  axios.get.mockResolvedValue({data: 'hello'});
  await getData().then(res => {
    expect(res).toBe('hello');
  });
});