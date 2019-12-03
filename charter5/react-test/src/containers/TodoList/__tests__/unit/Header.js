import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('Header 渲染样式正常', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it('Header 组件包含一个 input 框', () => {
  const wrapper = shallow(<Header />);
  const inputEle = wrapper.find('[data-test="input"]');
  expect(inputEle.length).toBe(1);
});

it('Header 组件 input 框初始化内容为空', () => {
  const wrapper = shallow(<Header />);
  const inputEle = wrapper.find('[data-test="input"]');
  expect(inputEle.prop('value')).toBe('');
});

it('Header 组件 input 框,当用户输入时,内容会跟着变化', () => {
  const wrapper = shallow(<Header />);
  const inputEle = wrapper.find('[data-test="input"]');
  const userInput = '123123123';
  // 使用这个 api 来触发事件
  inputEle.simulate('change', {
    target: {
      value: userInput
    }
  });
  expect(wrapper.state('value')).toEqual(userInput);
  const newInputEle = wrapper.find('[data-test="input"]');
  expect(newInputEle.prop('value')).toBe(userInput);
});

it('Header 组件 input 框输入回车时,如果 input 无内容,无操作', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndo={ fn }/>);
  const inputEle = wrapper.find('[data-test="input"]');
  wrapper.setState({
    value: ''
  });
  inputEle.simulate('keyUp', {
    keyCode: 13
  });

  expect(fn).not.toHaveBeenCalled();
});

it('Header 组件 input 框输入回车时,如果 input 有内容,函数应该被调用', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={ fn }/>);
  const inputEle = wrapper.find('[data-test="input"]');
  const userInput = '123123123';
  wrapper.setState({
    value: userInput
  });
  inputEle.simulate('keyUp', {
    keyCode: 13
  });

  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith(userInput);
  expect(inputEle.prop('value')).toBe('');
});

it('Header 组件 input 框输入回车时,如果 input 有内容,函数应该被调用,并清空内容', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={ fn }/>);
  const inputEle = wrapper.find('[data-test="input"]');
  const userInput = '123123123';
  wrapper.setState({
    value: userInput
  });
  inputEle.simulate('keyUp', {
    keyCode: 13
  });

  const newInputEle = wrapper.find('[data-test="input"]');
  expect(newInputEle.prop('value')).toBe('');
});
