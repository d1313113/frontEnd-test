import { mount } from '@vue/test-utils';
import { findTestWrapper } from '../../../../utils/testUtils';
import TodoList from '../../TodoList';
import store from '../../../../store';

it(`
  1.用户会在 header 输入框输入内容
  2.用户会点击回车按钮
  3.列表项应该增加用户输入内容的列表项
`, () => {
  const wrapper = mount(TodoList, {store});
  const inputElem = findTestWrapper(wrapper, 'input').at(0);
  const inputElem1 = findTestWrapper(wrapper, 'input1').at(0);
  const content = 'cumelmell';
  inputElem.setValue(content);
  inputElem.trigger('change');
  inputElem.trigger('keyup.enter');
  inputElem1.setValue(content);
  inputElem1.trigger('change');
  inputElem1.trigger('keyup.enter');
  const listItems = findTestWrapper(wrapper, 'item');
  expect(listItems.length).toBe(2);
  expect(listItems.at(0).text()).toContain(content);
  expect(listItems.at(1).text()).toContain(content);
});
