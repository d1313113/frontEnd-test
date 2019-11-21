import $ from 'jquery';
import addDivToBody from './mockDom';

// jest 在 node 环境中实现了一套 dom 的语法,称为 jsDom ,所以可以在 node 环境中直接使用 dom api
test('测试 addDivToBody', () => {
  addDivToBody();
  expect($('body').find('div').length).toBe(1);
  addDivToBody();
  expect($('body').find('div').length).toBe(2);
});