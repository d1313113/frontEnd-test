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
  expect(wrapper.state('undoList')).toEqual([{ status: 'div', value: '123123123' }]);
  addFun('123123123');
  expect(wrapper.state('undoList').length).toBe(2);
});

it('TodoList 应该给未完成列表传递 list 数据,以及 deleteItem, changeStatus, handleBlur, valueChange 方法', () => {
  const wrapper = shallow(<TodoList />);
  const UndoList = wrapper.find('UndoList');
  expect(UndoList.prop('list')).toBeTruthy();
  expect(UndoList.prop('deleteItem')).toBeTruthy();
  expect(UndoList.prop('changeStatus')).toBeTruthy();
  expect(UndoList.prop('handleBlur')).toBeTruthy();
  expect(UndoList.prop('valueChange')).toBeTruthy();
});

it('当 deleteItem 方法被执行的时候, undoList应该被删除内容', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    { status: 'div', value: '学习jest' },
    { status: 'div', value: '学习TDD' },
    { status: 'div', value: '学习单元测试' }
  ];
  wrapper.setState({
    undoList: listData
  });
  wrapper.instance().deleteItem(1);
  expect(wrapper.state('undoList')).toEqual([listData[0], listData[2]]);
});

it('当 changeStatus 方法被执行的时候, undoList数据status被修改', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    { status: 'div', value: '学习jest' },
    { status: 'div', value: '学习TDD' },
    { status: 'div', value: '学习单元测试' }
  ];
  wrapper.setState({
    undoList: listData
  });
  wrapper.instance().changeStatus(1);
  expect(wrapper.state('undoList')[1]).toEqual({
    ...listData[1],
    status: 'input'
  });
});

it('当 handleBlur 方法被执行的时候, undoList数据status被修改', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    { status: 'input', value: '学习jest' },
    { status: 'div', value: '学习TDD' },
    { status: 'div', value: '学习单元测试' }
  ];
  wrapper.setState({
    undoList: listData
  });
  wrapper.instance().handleBlur(0);
  expect(wrapper.state('undoList')[0]).toEqual({
    ...listData[0],
    status: 'div'
  });
});

it('当 valueChange 方法被执行的时候, undoList数据value被修改', () => {
  const wrapper = shallow(<TodoList />);
  const listData = [
    { status: 'input', value: '学习jest' }
  ];
  const value = '学习TDD';
  wrapper.setState({
    undoList: listData
  });
  wrapper.instance().valueChange(0, value);
  expect(wrapper.state('undoList')[0]).toEqual({
    ...listData[0],
    value: value
  });
});