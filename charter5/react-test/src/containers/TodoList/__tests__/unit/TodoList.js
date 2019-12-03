import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../index';

it('TodoList 初始化列表为空', () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state('undoList')).toEqual([]);
});

it('TodoList 应该给 Header 增加一个 undoList 内容的方法', () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find('Header');
  expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem);
});

it('Header 调用回车时 UndoList应该新增内容', () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find('Header');
  const addFun = Header.prop('addUndoItem');
  addFun('123123123');
  expect(wrapper.state('undoList').length).toBe(1);
  expect(wrapper.state('undoList')).toEqual(['123123123']);
  addFun('123123123');
  expect(wrapper.state('undoList').length).toBe(2);
});
