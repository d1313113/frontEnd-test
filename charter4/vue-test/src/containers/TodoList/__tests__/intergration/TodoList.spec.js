import { mount } from '@vue/test-utils';
import { findTestWrapper } from '../../../../utils/testUtils';
import TodoList from '../../TodoList';

it(`
  1.用户会在 header 输入框输入内容
  2.用户会点击回车按钮
  3.列表项应该增加用户输入内容的列表项
`, () => {
  const wrapper = mount(TodoList);
  const inputElem = findTestWrapper(wrapper, 'input').at(0);
  const content = 'cumelmell';
  inputElem.setValue(content);
  inputElem.trigger('change');
  inputElem.trigger('keyup.enter');
  const listItems = findTestWrapper(wrapper, 'item');
  expect(listItems.length).toBe(1);
  expect(listItems.at(0).text()).toContain(content);
});
